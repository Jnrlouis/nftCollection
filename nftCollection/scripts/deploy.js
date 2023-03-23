const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  // const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;

  const SaitamaContract = await ethers.getContractFactory("Saitama");

  // deploy the contract
  const deployedSaitamaContract = await SaitamaContract.deploy(
    metadataURL
  );

  // print the address of the deployed contract
  console.log(
    "Saitama Contract Address:",
    deployedSaitamaContract.address
  );

}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });