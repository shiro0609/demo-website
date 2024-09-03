import React from 'react';
import Slider from 'react-slick';

const testimonialData = [
  {
    id: 1,
    name: 'Victor',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    img: 'https://picsum.photos/101/101'
  },
  {
    id: 2,
    name: 'Amy',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    img: 'https://picsum.photos/102/102'
  },
  {
    id: 3,
    name: 'David Kodlin',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    img: 'https://picsum.photos/104/104'
  }
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    
    <div className='py-10 mb-10 mx-10'>
      <div>
        {/* header section  */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos='fade-up' className='text-sm md:text-lg text-orange-300'>What Our Customers Say</p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>Testimonials</h1>
          <p data-aos='fade-up' className='text-xs md:text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
      </div>
      {/* Testimonial cards  */}
      <div data-aos='zoom-in'>
        <Slider {...settings}>
          {
            testimonialData.map((data)=>(
              <div className='my-6'>
                <div
                  key={data.id}
                  className='flex flex-col h-72 gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-orange-300/10 relative'
                >
                  <div className='mb-4'>
                    <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-xs text-gray-500 dark:text-gray-200'>{data.review}</p>
                      <h3 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h3>
                    </div>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-gray-200'>,,</p>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;