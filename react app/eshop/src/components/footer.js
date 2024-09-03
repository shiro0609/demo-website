import React from 'react';
import Logo from '../assets/logo.webp';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';

const FooterLinks = [
  {
    title: 'Home',
    link: '/#'
  },
  {
    title: 'About',
    link: '/#about'
  },
  {
    title: 'Contact',
    link: '/#contact'
  },
  {
    title: 'Blog',
    link: '/#blog'
  }
]

const Footer = () => {
  return (
    <div className='bg-orange-300 dark:bg-gray-800 text-white'>
      <div className='dark:bg-orange-500/40 px-10'>
        <div data-aos='zoom-in' className='grid md:grid-cols-3 py-10 gap-10'>
          {/* company details  */}
          <div className=''>
            <h2 className='flex items-center gap-3 text-justify text-xl md:text-3xl font-bold'>
              <img src={Logo} alt="" className='w-28'/>
              Shop
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iure, vel totam, consectetur eaque voluptate enim molestias natus obcaecati ex nemo dignissimos eligendi quis expedita odit optio. Nobis, ducimus quia?</p>
          </div>
          {/* footer link details  */}
          <div className='grid grid-cols-2 md:pl-10'>
            <div>
              <div className=''>
                <h2 className='text-xl md:text-3xl font-bold mb-3'>Links</h2>
                <ul className='flex flex-col gap-3'>
                  {
                    FooterLinks.map((link)=> (
                      <li  className='cursor-pointer hover:text-black hover:translate-x-1 duration-300 dark:hover:text-gray-200' key={link.title}>
                        <span>{link.title}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            
          </div>
            {/* social media details  */}
          <div>
            <div className='flex items-center gap-3'>
              <a href="#">
                <FaInstagram className='text-3xl'/>
              </a>
              <a href="">
                <FaFacebook className='text-3xl'/>
              </a>
              <a href="">
                <FaLinkedin className='text-3xl'/>
              </a>
            </div>
            <div className='mt-6'>
              <div className='flex items-center gap-3'>
                <FaLocationArrow />
                <p>Noida, Pretish Menish</p>
              </div>
              <div className='flex items-center gap-3'>
                <FaMobileAlt />
                <p>0123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;