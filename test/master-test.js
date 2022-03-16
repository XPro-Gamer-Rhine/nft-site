const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('DogNFT', function() {
    let owner;
    let artist;
    let buyer1;
    let buyer2;
    let buyer3;
    let dogNFT;
    let marketplace;
    beforeEach(async function() {
        // deploy the NFT contract
        const dogNFTContract = await ethers.getContractFactory('DogNFT');
        dogNFT = await dogNFTContract.deploy();
        await dogNFT.deployed();

        // Deploy the marketplace contract
        const marketplaceContract = await ethers.getContractFactory(
            'NFTMarket'
        );
        marketplace = await marketplaceContract.deploy(10, 10);
        await marketplace.deployed();

        [owner, artist, buyer1, buyer2, buyer3] =
        await ethers.getSigners();
    });

    describe('Market Item', function() {
        it('currectly creates a market ttem', async function() {
            // step 1: create the NFT
            dogNFT
                .connect(buyer2)
                .createCollectible(
                    'https://ipfs.infura.io/ipfs/Qme8mvePL8EwQVXy7DYo3CNJSdPxheNmXEnkBx3W8EYLiG',
                    '3',
                    '3',
                    '3',
                    '3',
                    '3',
                    '3',
                    '3'
                )
                .then(
                    // Step 2: Need to call the function from the NFT contract and approve the marketplace address
                    // NOTE: after approve then the marketplace contract can access all the NFT by this owner!!
                    await dogNFT.connect(buyer2).approve(marketplace.address, 1)
                )
                .then(
                    // step 3: add new item to the market place
                    await marketplace
                    .connect(buyer2)
                    .addMarketItem(1, dogNFT.address, 100)
                );
        });
    });
});