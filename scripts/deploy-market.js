// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat');

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const networkName = hre.network.name;
    console.log(`Harhat connected to network: ${networkName}`);
    console.log(
        'Deploying contracts with the account:',
        deployer.address
    );

    const dogNFT = await hre.ethers.getContractFactory('DogNFT');
    const dogNFTContract = await dogNFT.deploy();
    await dogNFTContract.deployed();
    console.log('DogNFT deployed to:', dogNFTContract.address);

    const percentage = 10;
    const rate = 10;
    const nftMarket = await hre.ethers.getContractFactory('NFTMarket');
    const nftMarketContract = await nftMarket.deploy(percentage, rate);
    await nftMarketContract.deployed();
    console.log('NFTMarket deployed to:', nftMarketContract.address);

    if (networkName === 'kovan') {
        const args = `\'${artistAddress}\' \'${minBidPrice}\' \'${ownerPercentage}\' \'${collectionName}\' \'${collectionSymbol}\'`;
        console.log(`\n To Verify your contract on Etherscan run the following command:
    > npx hardhat verify --network kovan ${contract.address} ${args}`);
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });