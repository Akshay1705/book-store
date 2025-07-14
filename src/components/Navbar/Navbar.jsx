import React from 'react'
import Logo from '../../assets/website/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Seller",
      link: "/#bestbooks",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "All",
      link: "/#all",
    },
  ];
const Navbar = ({handleOrderPopup}) => {
  return (
    <>
    <div className='sticky top-0 z-50 shadow-lg dark:shadow-[0_1px_4px_gray] bg-green-200 dark:bg-gray-900 dark:text-white duration-300'>
        <div className="py-3 max-w-screen-xl mx-auto px-4">
            <div className="flex justify-between items-center">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                <img src={Logo} alt="TalesToGo Logo" className="w-16 h-16 object-contain" />
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                TalesToGo
                </h2>
            </a>

            {/* Nav Links - Only visible on desktop */}
            <ul className="hidden sm:flex items-center gap-6 font-semibold">
                {Menu.map((menu) => (
                <li key={menu.id} className="text-lg">
                    <a 
                    href={menu.link} 
                    className="transition-colors duration-200 hover:text-green-500 dark:hover:text-blue-500"
                    >
                    {menu.name}
                    </a>
                </li>
                ))}
            </ul>

            {/* Right Section (Dark Mode + Order Button) */}
            <div className="flex items-center gap-3">
                <DarkMode />

                <button 
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-green-600 dark:from-blue-600 to-green-500 dark:to-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                Order
                <FaCartShopping className="text-lg text-white" />
                </button>
            </div>
            </div>
        </div>
        </div>

    </>
  )
}

export default Navbar