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
  ];


const DropdownLinks = [
    {
      id: 1,
      name: "Trending Books",
      link: "/#bestbooks",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Authors",
      link: "/#",
    },
  ];
const Navbar = () => {
  return (
    <>
    <div className='sticky top-0 z-50 shadow-lg dark:shadow-[0_1px_4px_gray] bg-white dark:bg-gray-900 dark:text-white duration-300'>
        <div className="py-3 max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center px-4">
                <div>
                    <a href="#"
                        className='font-bold text-2xl flex items-center sm:text-3xl gap-2 transition-transform duration-300 hover:scale-110 hover:text-blue-500'>
                        <img src={Logo} alt="asc"
                        className='w-10 ' />
                        Books
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
                                    <a href={menu.link} className='transition-all duration-20 hover:text-blue-500 flex items-center h-[72px]'>
                                        {menu.name}
                                    </a>
                                </li>
                            ))
                        }
                        {/* dropdown section*/}
                        <li className='inline-block mx-4 text-lg sm:text-xl relative group cursor-pointer'>
                        <a href="/#" className='flex h-[72px] items-center gap[2px] hover:text-blue-500'>
                            Quick Links
                            <span>
                                <FaCaretDown className='transition duration-300 group-hover:rotate-180'/>
                            </span>
                        </a>
                        <div className='absolute top-[100%] left-1 bg-white hidden group-hover:block dark:bg-gray-900 shadow-md w-48 rounded-md'>    
                            <ul>
                                {
                                    DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-blue-500'>{data.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        </li>
                    </ul>
                        {/* button section */}
                        <button className='bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105 gap-3 flex items-center'>
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