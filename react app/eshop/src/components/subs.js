import React from 'react';
import Banner from '../assets/banner.webp';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%'
}

const Subscribe = () => {
  return (
    <div
      data-aos='fade-up'
      className='flex justify-center mb-20 bg-gray-100 dark:bg-gray-800 text-white px-10'
      style={BannerImg} 
    >
      <div className=' max-w-96 backdrop-blur-sm py-10'>
        <div className='space-y-8 '>
          <h2 className='text-2xl text-center font-semibold'>Get Notified About New Products</h2>
          <input type="text" placeholder='Enter your email' className='w-full p-3'/>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;