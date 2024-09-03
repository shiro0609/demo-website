import React from 'react';
import BannerImg from '../assets/shoes.webp';
import { IoFastFood } from 'react-icons/io5';
import { IoLockClosed } from 'react-icons/io5';
import { IoCash } from 'react-icons/io5';
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
      <div className='mx-10'>
        <div data-aos='zoom-in' className='grid grid-cols-1 md:grid-cols-2 items-center'>
          {/* image section  */}
          <div>
            <img src={BannerImg} alt="" className='max-w-96 h-80 w-full mx-auto drop-shadow object-cover'/>
          </div>
          {/* details section */}
          <div className='flex flex-col justify-center gap-6'>
            <h2 className='text-3xl font-bold'>Winter Sales up to 50% Off</h2>
            <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum aperiam eius sapiente maiores, numquam deserunt corporis recusandae ex repellendus perferendis id tempora quia facere beatae ratione adipisci, quaerat inventore.</p>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <IoLockClosed className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                <p>Quality Products</p>
              </div>
              <div className='flex items-center gap-4'>
                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                <p>Fast Delivery</p>
              </div>
              <div className='flex items-center gap-4'>
                <IoCash className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
                <p>Easy Payment Method</p>
              </div>
              <div className='flex items-center gap-4'>
                <BiSolidOffer className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-100 dark:bg-red-400' />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;