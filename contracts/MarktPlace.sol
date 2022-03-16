// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;
import "@openzeppelin/contracts/utils/Counters.sol";

interface IERC721 {
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );
    event Approval(
        address indexed owner,
        address indexed approved,
        uint256 indexed tokenId
    );
    event ApprovalForAll(
        address indexed owner,
        address indexed operator,
        bool approved
    );

    function balanceOf(address owner) external view returns (uint256 balance);

    function ownerOf(uint256 tokenId) external view returns (address owner);

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function approve(address to, uint256 tokenId) external;

    function getApproved(uint256 tokenId)
        external
        view
        returns (address operator);

    function setApprovalForAll(address operator, bool _approved) external;

    function isApprovedForAll(address owner, address operator)
        external
        view
        returns (bool);

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes calldata data
    ) external;

    function getCreator(uint256 _id) external view returns (address);
}

contract NFTMarket {
    using Counters for Counters.Counter;
    address public marketOwner; // owner address
    uint256 public marketPercentage;
    mapping(uint256 => marketItem) public marketItemsList; // list of all market item
    Counters.Counter public marketItemCounter; // List of market item counter
    mapping(address => uint256) listOfNFTContracts;

    enum status {
        ACTIVE,
        SOLD,
        REMOVED
    }

    // strict for the market item
    struct marketItem {
        uint256 id;
        address creator;
        uint256 tokenID;
        address NFTaddress;
        uint256 price;
        address owner;
        status currentStatus;
    }

    modifier onlyOwner() {
        require(tx.origin == marketOwner, "Not an owner");
        _;
    }

    constructor(uint256 _marketPercentage, uint256 royalty_fee) public {
        marketOwner = msg.sender;
        marketPercentage = _marketPercentage;
    }

    function changeOwnerPercentage(uint256 newPercent) external onlyOwner {
        marketPercentage = newPercent;
    }

    event AddMarketItem(
        uint256 _tokenID,
        address _NFTaddress,
        uint256 _price,
        address _owner
    );

    event ChangeOwnership(uint256 _itemId, address newOwner, address oldOwner);

    ///@notice this function can be used to add new market item
    function addMarketItem(
        uint256 _tokenID,
        address _NFTaddress,
        uint256 _price
    ) external {
        require(
            IERC721(_NFTaddress).ownerOf(_tokenID) == msg.sender,
            "Sender is not the NFT owner!!"
        );

        address _owner = msg.sender;

        if (listOfNFTContracts[_NFTaddress] == 0) {
            listOfNFTContracts[_NFTaddress] = 1;
        }

        IERC721(_NFTaddress).transferFrom(_owner, address(this), _tokenID);
        emit ChangeOwnership(_tokenID, address(this), _owner);

        uint256 currentItemIndex = marketItemCounter.current();
        address creatorAddress = IERC721(address(_NFTaddress)).getCreator(
            _tokenID
        );
        marketItemsList[currentItemIndex] = marketItem(
            currentItemIndex,
            creatorAddress,
            _tokenID,
            _NFTaddress,
            _price,
            _owner,
            status.ACTIVE
        );
        marketItemCounter.increment();
        emit AddMarketItem(_tokenID, _NFTaddress, _price, _owner);
    }

    function transferNFT(uint256 _tokenId, address _NFTaddress) private {
        IERC721(_NFTaddress).transferFrom(address(this), tx.origin, _tokenId);
        emit ChangeOwnership(_tokenId, tx.origin, address(this));
    }

    ///@notice sell market item
    function sellMarketItem(uint256 _itemId) external payable {
        require(
            msg.value == marketItemsList[_itemId].price,
            "Not Enough Amount Sent"
        );

        if (marketItemsList[_itemId].owner == marketOwner) {
            payable(marketItemsList[_itemId].owner).transfer(
                marketItemsList[_itemId].price
            );
        } else {
            uint256 multipliedAmount = marketItemsList[_itemId].price *
                marketPercentage;
            uint256 commisonOfMarket = multipliedAmount / 100;
            uint256 sellerAmount = marketItemsList[_itemId].price -
                commisonOfMarket;
            payable(marketOwner).transfer(commisonOfMarket);
            payable(marketItemsList[_itemId].owner).transfer(sellerAmount);
        }
        transferNFT(
            marketItemsList[_itemId].tokenID,
            marketItemsList[_itemId].NFTaddress
        );
        marketItemsList[_itemId].owner = msg.sender;
        marketItemsList[_itemId].currentStatus = status.SOLD;

        emit ChangeOwnership(_itemId, msg.sender, marketOwner);
    }

    ///@notice owner can transfer the amount directly to other wallet
    function giftNFT(uint256 _itemId, address _to) public {
        require(
            msg.sender == marketItemsList[_itemId].owner,
            "only owner can transfer nft"
        );
        marketItemsList[_itemId].owner = _to;
        transferNFT(
            marketItemsList[_itemId].tokenID,
            marketItemsList[_itemId].NFTaddress
        );
        emit ChangeOwnership(_itemId, _to, msg.sender);
    }
}
