module.exports = async function(deployer, network, accounts) {
  const contract = artifacts.require("BaseLock");
  await deployer.deploy(contract, {overwrite: false, from: accounts[0]}); // `from` for Truffle 5.1.58 bug
  const science = await contract.deployed();
  await science.createOracle({ from: deployer });
};
