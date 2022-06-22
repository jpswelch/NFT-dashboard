const { ethers } = require("ethers");
const { create } = require("ipfs-http-client");
const ipfs = create("https://ipfs.infura.io:5001");
const ContractAddr = "0x8bCc3fcC178299aFC2229285319196a451FD5d0A";
const abi = require("../contracts/abi.json");
const provider = new ethers.providers.Web3Provider(window.ethereum);

export const ipfsImageUpload = async (photo) => {
  const result = await ipfs.add(photo);
  let imagePath = `https://gateway.ipfs.io/ipfs/${result.path}`;
  return imagePath;
};

export const ipfsUpload = async (name, description, image) => {
  let imagePath = await ipfsImageUpload(image);

  const files = {
    path: "/",
    content: JSON.stringify({
      name: name,
      //   attributes: recipe.map((ingredient) => {
      //     return {
      //       trait_type: ingredient.name,
      //       value: ingredient.quantity,
      //     };
      //   }),

      image: imagePath,
      description: description,
    }),
  };
  console.log(files);
  const result = await ipfs.add(files);
  return result.path;
};

export const mintGiftNFT = async (
  name,
  description,
  image,
  recipient,
  account
) => {
  try {
    const gateway = await ipfsUpload(name, description, image);
    const signer = await provider.getSigner(account);
    const nonce = await signer.getTransactionCount();
    const nft = new ethers.Contract(ContractAddr, abi, signer);
    const tokenURI = gateway;

    const resp = await nft.mintCommunityGift(tokenURI, recipient, {
      nonce: nonce + 1,
    });

    return resp.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
};
