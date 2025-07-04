import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({orderPopup,handleOrderPopup}) => {
  return (
    <>
    {
        orderPopup && (<div className='h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm bg-black/50'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 dark:text-white duration-200 p-4 rounded-md shadow-md w-[300px] '>
                {/* header */}
                <div className='flex items-center justify-between'>
                    <h1>Order Your Book</h1>
                    <IoCloseOutline className='text-2xl cursor-pointer'
                    onClick={()=> handleOrderPopup(false)}
                    />
                </div>
                {/* form body */}
                <div className='mt-4'>
                    <input type="text" placeholder='Name'
                    className='w-full p-2 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                    />
                    <input type="email" placeholder='Email'
                    className='w-full p-2 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                    />
                    <input type="text" placeholder='Address'
                    className='w-full p-2 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                    />
                    <div className='flex justify-center'>
                        <button
                        className="bg-primary text-white py-2 px-8 rounded-full mt-4 ">
                        Order Now
                        </button> 
                    </div>
                </div>
            </div>
        </div>)
    }
    </>
  )
}

export default Popup