import React from "react";
import Logo from "../assets/logo.webp";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import DarkMode from "./darkmode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#"
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#rating"
  },
  {
    id: 3,
    name: "Kids' Wear",
    link: "/#kids"
  },
  {
    id: 4,
    name: "Men's Wear",
    link: "/#men"
  }
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#trending"
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#best"
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#toprate"
  }
]

const Navbar = ({handleOrderPopup}) => {
  return ( 
    <nav className="sticky top-0 z-40 shadow-md dark:bg-gray-800 shadow-gray-500 dark:text-white">
      {/* upper nav */}
      <div className="px-10 flex justify-between bg-orange-300 dark:bg-orange-500/40">
        <div>
          <a href="#" className="flex items-center">
            <img src={Logo} alt="logo" className="h-12"/>
            <p className="hidden md:flex font-bold dark:text-white">Shop</p>
          </a> 
        </div>

        <div className="flex justify-between items-center gap-4">
          {/* searchbar */}
          <div className="hidden md:flex relative group">
            <input type="text" placeholder="search" className="py-1 px-2 border border-black rounded-full w-48 group-hover:w-64 transition-all duration-300 group-hover:border-red-400 focus:outline-none focus:border-red-400"/>
            <IoSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3"/>
          </div>

          {/* cart */}
          <button 
            onClick={() => handleOrderPopup()}
            className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-200 py-1 px-4 text-white rounded-full group">
            <span className="hidden group-hover:block transition-all duration-300">Order</span>
            <FaShoppingCart className="items-center text-xl text-white shadow-sm"/>
          </button>

          {/* login/signup */}
          {/* <button className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-200 py-1 px-4 text-white rounded-full group">
            <span className="hidden group-hover:block transition-all duration-300">Login/Signup</span>
            <FaUser className="items-center text-xl text-white shadow-sm"/>
          </button> */}

          {/* darkmode */}
          <button>
            <DarkMode/>
          </button>
        </div>
      </div>

      {/* bottom nav */}
      <div className="hidden md:flex justify-center bg-white dark:bg-gray-800">
        <ul className="flex items-center gap-4">
          {
            Menu.map((data)=> (
              <li key={data.id}>
                <a href={data.link} className="inline-block px-4 hover:text-orange-500 duration-300">{data.name}</a>
              </li>
            ))
          }
          <li className="group relative cursor-pointer hover:text-orange-500 duration-300">
            <a href="" className="flex items-center gap-[2px] py-2">
              Trending Items
              <span>
                <FaCaretDown className="transition-all duration-300 group-hover:rotate-180"/>
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white p-2 rounded-md text-black">
              <ul>
                {DropdownLinks.map((data)=> (
                  <li>
                    <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-orange-300">{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;