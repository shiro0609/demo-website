import React from 'react';
import img1 from '../assets/shoes.webp';
import img2 from '../assets/shoes2.webp';
import { FaStar } from 'react-icons/fa';

const ProductData = [
  {
    id: 1,
    img: img1,
    name: "Nike Air",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt molestiae, non similique cumque magnam atque? Nobis, enim, similique architecto sit in non dicta fuga velit dolores assumenda deserunt cumque!"
  },
  {
    id: 2,
    img: img2,
    name: "Nike Air Jordan",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt molestiae, non similique cumque magnam atque? Nobis, enim, similique architecto sit in non dicta fuga velit dolores assumenda deserunt cumque!"
  },
  {
    id: 3,
    img: img1,
    name: "Nike Slick",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt molestiae, non similique cumque magnam atque? Nobis, enim, similique architecto sit in non dicta fuga velit dolores assumenda deserunt cumque!"
  },
  {
    id: 4,
    img: img2,
    name: "Nike Premium",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt molestiae, non similique cumque magnam atque? Nobis, enim, similique architecto sit in non dicta fuga velit dolores assumenda deserunt cumque!"
  }  
]

const TopProduct = () => {
  return (
    <div className='mx-10'>
      <div className='container'>
        {/* header section  */}
        <div className='text-left mb-24'>
          <p data-aos='fade-up' className='text-sm text-orange-300'>Top Rated Items for you</p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>Best Products</h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
        {/* body section  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center gap-24 md:gap-20'>
          {
            ProductData.map((data) => (
              <div
                data-aos='zoom-in'
                className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-orange-300
                  hover:text-white relative shadow-xl duration-300 group max-w-[300px]'
              >
                <div className='h-[100px]'>
                  <img src={data.img} alt="" className='w-[140px] h-[140px] max-w-[140px] max-h-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
                </div>
                <div className='p-4 text-center h-44 '>
                  <div className='w-full flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-400'/>
                    <FaStar className='text-yellow-400'/>
                    <FaStar className='text-yellow-400'/>
                    <FaStar className='text-yellow-400'/>
                  </div>
                  <h3 className='text-xl font-bold dark:text-white'>{data.name}</h3>
                  <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.desc}</p>
                  <button 
                    className='bg-orange-300 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-300'
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TopProduct;