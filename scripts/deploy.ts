// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.



import { Contract } from "ethers";
import { artifacts, network, ethers } from "hardhat";

import path from "path";
import { MonoNFT } from "../typechain-types";
import fs from "fs";

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());


  const Token = await ethers.getContractFactory("MonoNFT");
  const NFTMarketPlace = await ethers.getContractFactory("NFTMarketPlace");

  const marketplaceContract = await NFTMarketPlace.deploy(ethers.utils.parseEther("0.1"));
  await marketplaceContract.deployed();
  const nft = await Token.deploy(marketplaceContract.address);
  await nft.deployed();
 

  console.log("Token address:", nft.address);
  console.log("Marketplace address:", marketplaceContract.address);
  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles({marketPlaceContract: marketplaceContract,marketplaceName: "NFTMarketPlace", nftContract: nft, nftName: "MonoNFT" });

  //faucet to 0xA435bfE6ad3015C88cAe9Ac1484F9e315dDA41Cf
  await deployer.sendTransaction({to: "0xA435bfE6ad3015C88cAe9Ac1484F9e315dDA41Cf", value: ethers.utils.parseEther("100")});
  console.log("Faucet to 0xA435bfE6ad3015C88cAe9Ac1484F9e315dDA41Cf");
}

function saveFrontendFiles({nftContract, marketPlaceContract, nftName, marketplaceName}: 
  {nftContract: Contract, marketPlaceContract: Contract, nftName: string, marketplaceName: string}) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "app", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ nftAddress: nftContract.address, marketplaceAddress: marketPlaceContract.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync(nftName);
  const MarketPlaceArtifact = artifacts.readArtifactSync(marketplaceName);

  fs.writeFileSync(
    path.join(contractsDir, nftName + ".json"),
    JSON.stringify(TokenArtifact, null, 2)
  );
  fs.writeFileSync(
    path.join(contractsDir, marketplaceName + ".json"),

    JSON.stringify(MarketPlaceArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
