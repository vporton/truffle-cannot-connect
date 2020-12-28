const { myDeploy } = require('../lib/default-deployer');
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function(deployer, network, accounts) {
  const uuid = '4a4552a6-4644-11eb-a830-3f3c92c66629';
  const DefaultDAOInterface = artifacts.require("DefaultDAOInterface");
  const dao = deployer; // FIXME: Add owner DAO.
  await deployProxy(DefaultDAOInterface, [], { deployer: dao });
  const science = await myDeploy(deployer, network, accounts, "BaseLock", `urn:uuid:${uuid}`);
  await science.createOracle({ from: dao });
};
