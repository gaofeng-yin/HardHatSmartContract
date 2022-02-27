async function main() {
 
    const [deployer] = await ethers.getSigners();
 
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
 
    console.log("Account balance:", (await deployer.getBalance()).toString());
 
    const erc20Basic = await ethers.getContractFactory("ERC20Basic");
    const deployedContract = await erc20Basic.deploy(1000000000);
    console.log("Deployed ERCC20 contract address:", deployedContract.address); 

    //send some tokens. Change the address to another address from your MetaMask wallet. Any wallet other than the one you exported your private key can be used
    const result = await deployedContract.transfer('0x5eDC6D5b004059f4478F6Ce342522769F3BE9038',150000);
    console.log('tokens transferred, txid: ' + result.hash)
 
  }
 
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
