// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("DogNFT", function () {
//     let owner;
//     let artist;
//     let buyer1;
//     let buyer2;
//     let buyer3;
//     let dogNFT;
//     let marketplace;
//     beforeEach(async function () {
//         const dogNFTContract = await ethers.getContractFactory("DogNFT");
//         dogNFT = await dogNFTContract.deploy();
//         await dogNFT.deployed();
//         dogNFT.connect(owner).get
//         const marketplaceContract = await ethers.getContractFactory(
//             "NFTMarket"
//         );
//         marketplace = await marketplaceContract.deploy();
//         await marketplace.deployed();

//         [owner, artist, buyer1, buyer2, buyer3] = await ethers.getSigners();
//         // create NFT
//         dogNFT
//             .connect(buyer1)
//             .createCollectible(
//                 "https://ipfs.infura.io/ipfs/Qme8mvePL8EwQVXy7DYo3CNJSdPxheNmXEnkBx3W8EYLiG",
//                 "1",
//                 "1",
//                 "1",
//                 "1",
//                 "1",
//                 "1",
//                 "1"
//             );
//         dogNFT
//             .connect(buyer1)
//             .createCollectible(
//                 "https://ipfs.infura.io/ipfs/Qme8mvePL8EwQVXy7DYo3CNJSdPxheNmXEnkBx3W8EYLiG",
//                 "2",
//                 "2",
//                 "2",
//                 "2",
//                 "2",
//                 "2",
//                 "2"
//             );
//     });

//     it("create NEW ", async function () {
//         const Greeter = await ethers.getContractFactory("DogNFT");
//         const greeter = await Greeter.deploy();
//         await greeter.deployed();
//     });
// });
