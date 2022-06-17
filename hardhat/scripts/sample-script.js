async function main() {
  const CommunityGiftNFTs = await hre.ethers.getContractFactory(
    "CommunityGiftNFTs"
  );
  communityGiftNFTs = await CommunityGiftNFTs.deploy();
  await communityGiftNFTs.deployed();
  console.log("CommunityGiftNFTs deployed to:", communityGiftNFTs.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
