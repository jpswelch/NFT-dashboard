// const { create } = require("ipfs-http-client");
// const ipfs = create("https://ipfs.infura.io:5001");
// const ContractAddr = "";
// const { ethers } = require("ethers");
// // const abi = require(".././secrets/abi.json");
// // const provider = new ethers.providers.Web3Provider(window.ethereum);

// export const ipfsImageUpload = async (photo) => {
//   const result = await ipfs.add(photo);
//   let imagePath = `https://gateway.ipfs.io/ipfs/${result.path}`;
//   return imagePath;
// };

// export const ipfsUpload = async (name, description, image) => {
//   let imagePath = await ipfsImageUpload(image);

//   const files = {
//     path: "/",
//     content: JSON.stringify({
//       name: name,
//       //   attributes: recipe.map((ingredient) => {
//       //     return {
//       //       trait_type: ingredient.name,
//       //       value: ingredient.quantity,
//       //     };
//       //   }),

//       image: imagePath,
//       description: description,
//     }),
//   };
//   console.log(files);
//   const result = await ipfs.add(files);
//   return result.path;
// };

// export const mintGiftNFT = async (name, description, image, recipient) => {
//   try {
//     const gateway = await ipfsUpload(name, description, image);
//     // const signer = await provider.getSigner(account);
//     // const nonce = await signer.getTransactionCount();
//     const nft = new ethers.Contract(
//       ContractAddr
//       //   abi //TODO add contract abi
//       //   signer
//     );
//     const tokenURI = gateway;

//     await nft.mintCommunityGift(tokenURI, recipient, { nonce: nonce + 1 });
//     return true;
//   } catch (e) {
//     console.log(e);
//     return false;
//   }
// };
