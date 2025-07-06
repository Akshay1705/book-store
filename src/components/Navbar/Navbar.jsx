import React from 'react'
import Logo from '../../assets/website/logo.png'
import { FaCaretDown } from "react-icons/fa";
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
    <div className='sticky top-0 z-50 shadow-lg dark:shadow-[0_1px_4px_gray] bg-white dark:bg-gray-900 dark:text-white duration-300'>
        <div className="py-3 max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center px-4">
                <div>
                <a href="#"
                className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
                >
                    <img src={Logo} alt="The Adventure Bookstore Logo"
                        className="w-10 h-10 object-contain"
                    />
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                        The Adventure Bookstore
                    </h2>
                </a>
                </div>
                <div className='flex items-center justify-between gap-4 font-semibold ]'>
                    {/* dark light theam */}
                    <div>
                        <DarkMode/>
                    </div>
                    {/* menu section */}
                    <ul className="hidden sm:flex items-center gap-4 ">
                        {
                            Menu.map((menu) => (
                                <li key={menu.id} className='inline-block mx-4 text-lg '>
                                    <a href={menu.link} className='transition-all duration-20 hover:text-green-500 dark:hover:text-blue-500  flex items-center h-[72px]'>
                                        {menu.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                        {/* button section */}
                        <button 
                        onClick={handleOrderPopup}
                        className='bg-gradient-to-r from-green-600 dark:from-blue-600 to-green-500 dark:to-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:from-green-500 dark:hover:from-blue-500 hover:to-green-700 dark:hover:to-blue-700 transition-all duration-200 hover:scale-105 gap-3 flex items-center'>
                            Order
                            <FaCartShopping className='text-xl text-white drop-shodow-sm cursor-pointer' />
                        </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar