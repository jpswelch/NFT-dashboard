async function main() {
  const Market = await hre.ethers.getContractFactory("CommunityGiftNFTs");
  market = await Market.deploy();
  await market.deployed();
  console.log("CommunityGiftNFTs deployed to:", market.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
