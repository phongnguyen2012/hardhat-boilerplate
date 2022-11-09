import React from 'react'
import { useRouter } from 'next/router'
import Button from '../components/common/Button/Button';
type Props = {}

function NftDetailPage({ }: Props) {
    const router = useRouter();
    return (
        <>
        <div className='fix top-10 left-20'>
            <Button onClick={() => router.back()}>
                <span>Back</span>
            </Button>
        </div>
            <div className='grid grid-cols-3 items-center'>
                <div className='col-span-1 flex flex-col gap-2'>
                    <img
                        src='https://public.nftstatic.com/static/nft/res/nft-cex/S3/1667332816913_uucvp0hzywh4anbznvec7we2qzxzr4aw_400x400.png'
                        className='border rounded px-10' />
                    <div className='space-y-2'>
                        <h1 className='text-xl font-bold'>Description</h1>
                        <p>Động vật trong hệ thống phân loại 5 giới. Cơ thể của chúng lớn lên khi phát triển. Hầu hết động vật có khả năng di chuyển một cách tự nhiên và độc lập</p>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-xl font-bold'>Details</h1>
                        <div className='flex justify-between'>
                            <span>Creator</span>
                            <span>Bob</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Owner</span>
                            <span>Alice</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Contract Address</span>
                            <span>0x930kjkjtw983059kjg</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>TokenId</span>
                            <span>2568</span>
                        </div>
                    </div>

                </div>
                <div className='col-span-2 flex flex-col mx-20 gap-2'>
                    <span className='text-3xl font-bold'>Golden Ape Club #64</span>
                    <span className='text-gray-700 text-sm'>Price</span>
                    <span className='text-2xl font-semibold'>20 BNB </span>
                    <Button>Buy Now</Button>
                </div>
            </div>
        </>

    )

}

export default NftDetailPage