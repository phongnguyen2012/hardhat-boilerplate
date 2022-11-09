import React from 'react'
import { TiTick } from 'react-icons/ti'

type Props = {}

function Card({ }: Props) {
  return (
    <div className='rounded-md shadow-md border transform transition duration-300 hover:translate-y-1'>
      <img src="https://public.nftstatic.com/static/nft/res/nft-cex/S3/1664774232246_ufqtddsgs3nany6sc0rseupscjyxno32_400x400.png"
        className='w-full aspect-square'

      />
      <div className="flex flex-col space-y-1 p-2">
        <div className='text-lg font-bold'>#1195 Brian Armstrong</div>
        <div className='flex justify-between'>
          <span className='flex grap-1 items-center text-yellow-400 text-xs font-bold'>
            WIN NFT HEROES

            <span className='text-green-500'>

              <TiTick />
            </span>
          </span>
          <span className='rounded bg-gray-200 text-gray-700 p-1'>BSC</span>
        </div>
        <div className='flex justify-between'>
          <span>Price</span>
          <div>
            <span className='flex grap-1 items-center'>
            <img src='https://seeklogo.com/images/B/binance-smart-chain-bsc-logo-9C34053D61-seeklogo.com.png'
            className='w-5 h-5' />
            <span className='font-semibold'>0.2 BNB</span>
            </span>
            <span className='text-right block text-sm text-green-500'> = $ 99.83</span>
          </div>
          </div>
      </div>

    </div>
  );
}

export default Card