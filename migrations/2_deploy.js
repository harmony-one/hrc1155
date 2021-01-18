var HarmonyNFT = artifacts.require("HarmonyNFT");

module.exports = function (deployer) {
  const proxyAddress = "0x0000000000000000000000000000000000000000";
  deployer.then(function () {
    return deployer.deploy(HarmonyNFT, proxyAddress).then(function (token) {
      console.log(`HarmonyNFT is deployed at ${token.address}`);
    });
  });
};
