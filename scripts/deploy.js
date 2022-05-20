// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
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

  //Deploying Token Contract
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();

  console.log("Token address:", token.address);

  //Deploying Multisig Contract
//  const accounts = ["0xc769f69A2fd7EF64955E46A974d5892C14FC0e67","0x6D931307fB3A5124Bf25a09A1e9819396297eF8b"];
  const accounts = ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266","0x70997970C51812dc3A010C7d01b50e0d17dc79C8"];
  const MultiSig = await ethers.getContractFactory("MultiSig");
  const multiSig = await MultiSig.deploy(accounts, 2, token.address);

  await multiSig.deployed();

  console.log("MultiSig deployed to:", multiSig.address);


  //Deploying Escrow Contract
  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy();

  await escrow.deployed();

  console.log("Escrow deployed to:", escrow.address);


  //Block Number to start searches from
  const height = await ethers.provider.getBlockNumber();

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(token, multiSig, escrow, height);
}

function saveFrontendFiles(token, multiSig, escrow, height) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  const addresses = {
        Token: token.address.slice(2),
        MultiSig: multiSig.address.slice(2),
        Escrow: escrow.address.slice(2),
        Height: height
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify(addresses, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("Token");
  const MultiSigArtifact = artifacts.readArtifactSync("MultiSig");
  const EscrowArtifact = artifacts.readArtifactSync("Escrow");

  fs.writeFileSync(
    contractsDir + "/Token.json",
    JSON.stringify(TokenArtifact, null, 2)
  );
  fs.writeFileSync(
    contractsDir + "/MultiSig.json",
    JSON.stringify(MultiSigArtifact, null, 2)
  );
  fs.writeFileSync(
    contractsDir + "/Escrow.json",
    JSON.stringify(EscrowArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
