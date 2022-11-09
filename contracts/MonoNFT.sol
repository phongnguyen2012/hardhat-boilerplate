//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract MonoNFT is ERC721URIStorage , ERC721Enumerable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address nftMarketPlaceAddress;
    constructor(address _nftMarketPlaceAddress) ERC721("MonoNFT", "MONO") {
        nftMarketPlaceAddress = _nftMarketPlaceAddress;
    }
    function giveAway(address to) public returns (uint256) {
        uint256 tokenId = _tokenIds.current();
        string memory mockTokenURI ="https://arweave.net/9xcquhYgM93LhBQxMEbWUtL20Zz4eXYMP7qLGu-Y7K8";
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, mockTokenURI);

        setApprovalForAll(nftMarketPlaceAddress, true);

        _tokenIds.increment();
        console.log("Minted token %s to %s", tokenId, to);
        return tokenId;
    }
    //beforeTokenTransfer
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal virtual override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }
    
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
    function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
    function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
}