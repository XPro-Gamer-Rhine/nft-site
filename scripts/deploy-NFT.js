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

    const DogNFT = await hre.ethers.getContractFactory('DogNFT');
    // 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
    const artistAddress = '';
    const minBidPrice = '1';
    const ownerPercentage = '12';
    const collectionName = 'PFP Shop';
    const collectionSymbol = 'PFP';

    const contract = await DogNFT.deploy(
        artistAddress,
        minBidPrice,
        ownerPercentage,
        collectionName,
        collectionSymbol
    );

    await contract.deployed();

    console.log('DogNFT deployed to:', contract.address);

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