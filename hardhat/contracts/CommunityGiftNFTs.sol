pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CommunityGiftNFTs is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddr;

    event CommunityGiftMinted(uint256);

    constructor(address _addr) ERC721("CGift", "CMG") {
        contractAddr = _addr;
    }

    function mintCommunityGift(string memory _tokenURI, address recipient) public {

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        emit CommunityGiftMinted(newItemId,recipient);
    }
}