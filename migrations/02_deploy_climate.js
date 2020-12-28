const { myDeploy } = require('../lib/default-deployer');

module.exports = async function(deployer, network, accounts) {
  const uuid = '1bb89f0c-47ab-11eb-9b52-2bc780f5fac3';
  const climate = await myDeploy(deployer, network, accounts, "Lock", `urn:uuid:${uuid}`);
  // await climate.createOracle({contractAddress: carbon, tokenId: retiredCarbonTokenId})
};
