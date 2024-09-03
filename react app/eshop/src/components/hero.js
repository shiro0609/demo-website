import React from 'react';
import Image1 from '../assets/shoes.webp';
import Image2 from '../assets/shoes2.webp';
import Slider from 'react-slick';

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 50% off on all Men's Wear",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente! Aliquam quae ex earum, facere numquam alias. Saepe dignissimos, odit quod, quam accusamus vitae praesentium ipsam veritatis, rem voluptatibus ratione!"
  },
  {
    id: 2,
    img: Image2,
    title: "Up to 50% off on all Men's Wear",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente! Aliquam quae ex earum, facere numquam alias. Saepe dignissimos, odit quod, quam accusamus vitae praesentium ipsam veritatis, rem voluptatibus ratione!"
  }
  // {
  //   id: 3,
  //   img: Image3,
  //   title: "Up to 50% off on all Men's Wear",
  //   desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente! Aliquam quae ex earum, facere numquam alias. Saepe dignissimos, odit quod, quam accusamus vitae praesentium ipsam veritatis, rem voluptatibus ratione!"
  // }
]

const Hero = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[650px] px-10 md:px-32 lg:px-60 bg-gray-100 flex justify-center items-center dark:bg-gray-800 dark:text-white duration-200'>
      {/* background pattern */}
      <div className='h-[640px] w-[640px] bg-orange-500/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
      {/* hero section  */}
      <div className='container'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* textcontent */}
                <div className='flex flex-col justify-center items-center md:items-start gap-4 pt-0 text-left order-1 relative z-10'>
                  <h1 className='text-3xl md:text-5xl font-bold'>{data.title}</h1>
                  <p className='text-sm'>
                    {data.desc}
                  </p>
                  <div>
                    <button className='bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-200 py-1 px-4 text-white rounded-full'>
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section  */}
                <div className='order-2'>
                  <div className='relative z-10'>
                    <img src={data.img} alt="" className='w-[300px] h-[300px] object-contain mx-auto'/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;