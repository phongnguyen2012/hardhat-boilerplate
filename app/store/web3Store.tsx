import { Provider } from '@ethersproject/providers';
import { ethers } from 'ethers'
import { ReactNode, useEffect } from 'react';
import create from 'zustand'
import { MonoNFT, MonoNFT__factory, NFTMarketPlace, NFTMarketPlace__factory } from '../typechain'
const addresses = require("../src/contracts/contract-address.json");

export const CHAIN_ID ="0x539";
export const CHAIN_NAME ="Localnet";
interface Web3ModelStore {
    isConnected: boolean
    nftContract: MonoNFT | null
    marketplaceContract: NFTMarketPlace | null
    walletAddress: string | null
    isInit: boolean
    setIsConnected: (isConnected: boolean) => void
    connect: () => void
    disconnect: () => void
    init(): void
}

export const useWeb3Store = create<Web3ModelStore>((set) => ({
    isConnected: false,
    nftContract: null,
    marketplaceContract: null,
    walletAddress: null,
    isInit: false,
    setIsConnected: (isConnected) => set({ isConnected }),
    connect: async () => { 
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        set({isConnected: true,
            walletAddress: await signer.getAddress(),
        });
    },
    disconnect: () =>{
        return set({ isConnected: false });
    },
    init: async () => {
        //check user installed metamask?
        if (!window.ethereum) {
            return
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);

       
      
        const {provider: ethereum} = provider;
        //@ts-ignore
        ethereum.on('accountsChanged', (accounts: string[]) => {
            if (accounts.length > 0) {
                set({ isConnected: true,
                    walletAddress: accounts[0],
                });
            } else {
                set({ isConnected: false,
                    walletAddress: null,
                });
            }
        });

        const accounts = await provider.listAccounts();

        if (accounts?.length > 0) {
            set({ isConnected: true,
                walletAddress: accounts[0],
            });
        }

        //@ts-ignore
        ethereum.on('chainChanged', () => window.location.reload());

        return set({
            nftContract: MonoNFT__factory.connect(addresses.nftAddress, provider),
            marketplaceContract: NFTMarketPlace__factory.connect(addresses.marketplaceAddress, provider),
            isInit: true,
        });
    }
}));

export const Web3Provider = ({ children }: {children: ReactNode}) => {
    const init = useWeb3Store(state => state.init);
    
    const {nftContract, marketplaceContract} = useWeb3Store();
    useEffect(() => {
        if (window.ethereum) {
            return
        }
        init();
        console.log(nftContract?.address, marketplaceContract?.address);
    }, [ethers]);
    useEffect(() => {
        console.log("nftContract", nftContract);
        console.log("marketplaceContract", marketplaceContract);
    });
    return <>{children}</>;

};
