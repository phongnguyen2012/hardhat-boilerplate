// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Card from "./components/Card/Card";
import Button from "./components/common/Button/Button";
import Input from "./components/common/input/Input";
import ReactPaginate from 'react-paginate';
import { ethers } from "ethers";

export default function Home() {
  const handlePageClick = () => {}
  const pageCount = 5;
  return (
    <main>
      <h1>Home</h1>
      {/* <Button onClick={async() => { 
        //check user installed metamask?
        if (!window.ethereum) {
          return
        }
        const signer = await window.ethereum.request({ method: 'eth_requestAccounts' });

        const signerProvider = new ethers.providers.Web3Provider(window.ethereum);
        const signerSigner = signerProvider.getSigner();
        const nftContract = MonoNFT__factory.connect(address.nftAddress, signerSigner);

        await(await nftContract?.giveAway("0xA435bfE6ad3015C88cAe9Ac1484F9e315dDA41Cf")).wait();
        toast("NFT sent to your wallet");

      }}>
        Give away NFT
      </Button> */}

      {/* <div className="grid space-y-4 mb-4">
        <Button>
          <span>Connect Wallet</span>
        </Button>
        <Input />
      </div> */}

      <div className="grid grid-cols-2 mx:grid-cols-4 grap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        // renderOnZeroPageCount={null}
        containerClassName="flex justify-center mt-4 items-center space-x-2 rounded"
        activeClassName="bg-gray-900 p-2 text-white rounded"
        pageClassName="bg-gray-200 p-2 aspec-square w-10 text-center rounded"
        previousClassName="bg-gray-200 p-2 text-center rounded"
        nextClassName="bg-gray-200 p-2 text-center rounded"
      />
    </main>

  )
}
Home.title = 'Home Page';