//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//IRC721
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarketPlace {
    using Counters for Counters.Counter;
    uint256 public listingPrice;

    constructor(uint256 _listingPrice) {
        listingPrice = _listingPrice;
    }

    struct Item {
        address nftContract;
        uint256 tokenId;
        uint256 price;
        address payable seller;
        bool sold;
    }
    Item[] public items;
    Counters.Counter private _itemIds;
    function listNft(
        address _nftAddress,
        uint256 _tokenId,
        uint256 _price
    ) public payable returns (uint256) {
        require(_price > 0, "Price must be at least 1 wei");
        require(msg.value == listingPrice, "Price must be equal to listing price");
       _itemIds.increment();
       uint256 itemId = _itemIds.current();
       IERC721(_nftAddress).transferFrom(msg.sender, address(this), _tokenId);
       items.push(Item(_nftAddress, _tokenId, _price, payable(msg.sender), false));
       return itemId;
    }
    function delistNft(uint256 _itemId) public {
        Item storage item = items[_itemId];
        require(item.seller == msg.sender, "Only seller can delist");
        require(item.sold == false, "Item already sold");
        IERC721(item.nftContract).transferFrom(address(this), msg.sender, item.tokenId);
        delete items[_itemId];
    }
    function changeNftPrice(uint256 _itemId, uint256 _price) public {
        Item storage item = items[_itemId];
        require(item.seller == msg.sender, "Only seller can change price");
        require(item.sold == false, "Item already sold");
        item.price = _price;
    }
    function nftPrice(uint256 _itemId) public view returns (uint256) {
        return items[_itemId].price;

    }
    function buyNft(uint256 _itemId) public payable {
        Item storage item = items[_itemId];
        require(item.sold == false, "Item already sold");
        require(msg.value == item.price, "Price must be equal to item price");
        item.sold = true;
        item.seller.transfer(msg.value);
        IERC721(item.nftContract).transferFrom(address(this), msg.sender, item.tokenId);
    }
    function isSold(uint256 _itemId) public view returns (bool) {
        return items[_itemId].sold;
    }
}