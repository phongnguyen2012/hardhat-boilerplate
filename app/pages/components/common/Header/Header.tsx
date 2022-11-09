import React, { useEffect, useRef, useState } from 'react'
import { NFTMarketPlace__factory, MonoNFT__factory, NFTMarketPlace, MonoNFT } from '../../../../typechain'
import { ethers } from 'ethers'
import { toast } from 'react-hot-toast';
import Button from '../Button/Button';
import {CHAIN_ID, CHAIN_NAME, useWeb3Store} from '../../../../store/web3Store';
const address = require("../../../../src/contracts/contract-address.json");

type Props = {};


declare global { interface Window { ethereum: any; } }

function Header({ }: Props) {
  
  const {connect, isConnected, walletAddress, disconnect} = useWeb3Store();
  // const chainId = useRef(typeof window !== 'undefined' ? window.ethereum.chainId : null);
  const [chainId, setChainId] = useState<any>(null);

  useEffect(() => {
    if (!window.ethereum) {
      return
    }
    setChainId(window.ethereum.chainId);

    },[ethers]);



  const changeNetwork = async () => {
    if (!chainId) {
      toast.error('Please install Metamask', {icon: '🦊'});
    }
    if(window.ethereum.networkVersion != CHAIN_ID) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{chainId: CHAIN_ID}]
        });
      }
      catch (err: any) {
        if (err.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainName: 'Polygon Mainnet',
                chainID: chainId.current,
                nativeCurrency: {name: 'MATIC', symbol: 'MATIC', decimals: 18},
                rpcUrls: ['https://polygon-rpc.com/']
              }]
            });
          }
          catch (addError) {
            console.log(addError);
          }
        }
      }
    }

  }

  // useEffect(() => {
  //   if (!window.ethereum) {
  //     return;
  //   }
   
  // }, [ethers]);
  return (
    <div>
      
      <Button onClick={() => connect()}>
        <span>{isConnected ? walletAddress: "Connect Wallet"}</span>
      </Button>

      {isConnected &&(
      <Button onClick={() => disconnect()}>
        <span>{"Disconnect wallet"}</span>
      </Button>)}
      {chainId && chainId !== CHAIN_ID && (
        <div className='bg-red-300 p-2 rounded-md'> 
          <p>You are not connected to Polygon Network. Please connect to Polygon Network.</p>
          <span>{CHAIN_NAME}</span>
          <Button onClick={() => changeNetwork()}>
            <span>Change Network</span>
            </Button>
        </div>
        )}
    </div >
  )
}

export default Header