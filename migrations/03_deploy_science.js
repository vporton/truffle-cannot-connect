const { myDeploy } = require('../lib/default-deployer');
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function(deployer, network, accounts) {
  const science = await myDeploy(deployer, network, accounts, "BaseLock");
  await science.createOracle({ from: deployer });
};
