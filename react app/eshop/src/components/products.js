import React from 'react';
import img1 from '../assets/shoes.webp';
import img2 from '../assets/shoes2.webp';
import { FaStar } from 'react-icons/fa';

const ProductData = [
  {
    id: 1,
    img: img1,
    name: "Women Ethic",
    color: "blue",
    rating: 4.8
  },
  {
    id: 2,
    img: img2,
    name: "Men Ethic",
    color: "red",
    rating: 4.9
  },
  {
    id: 3,
    img: img1,
    name: "Kids Ethic",
    color: "blue",
    rating: 4.7
  },
  {
    id: 4,
    img: img2,
    name: "Most Favourite",
    color: "red",
    rating: 5.0
  }
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='mx-10'>
        {/* header section  */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos='fade-up' className='text-sm md:text-lg text-orange-300'>Top Selling Items for you</p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>Products</h1>
          <p data-aos='fade-up' className='text-xs md:text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
        {/* body section  */}
        <div>
          <div className='grid grid-cols-2 md:grid-cols-4 place-items-center gap-5'>
            {/* card section  */}
            {
              ProductData.map((data) => (
                <div key={data.id} 
                  data-aos='fade-up'
                  className='space-y-3'
                >
                  <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover'/>
                  <div>
                    <h3 className='font-semibold text-base md:text-lg'>{data.name}</h3>
                    <p className='text-sm text-gray-600'>{data.color}</p>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-400'/>
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div data-aos='fade-up' className='flex justify-center'>
            <button className='text-center mt-10 cursor-pointer bg-orange-300 text-white py-1 px-4 rounded-md'>View All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;