var ABCToken = artifacts.require("./ABCToken.sol");
var MyTokenSale = artifacts.require("./MyTokenSale.sol");
var KycContract = artifacts.require("./KycContract.sol");

module.exports = async function(deployer) {
  var addr = await web3.eth.getAccounts();

  // deply ABC token
  await deployer.deploy(ABCToken, 1000000);

  // deploy KYC
  await deployer.deploy(KycContract);

  // deply MyTokenSale and set ABC Token address & KYC Address
  await deployer.deploy(MyTokenSale, 1, addr[0], ABCToken.address, KycContract.address);
  
  // get instance of deployed ABC Token and execute transfer to MyTokenSale Address
  var instance = await ABCToken.deployed();
  await instance.transfer(MyTokenSale.address, 1000000);
};
