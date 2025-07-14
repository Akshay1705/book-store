import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm bg-black/50">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 bg-fixed dark:text-white duration-200 p-6 rounded-xl shadow-lg w-[320px] sm:w-[360px]">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Order Your Adventure Book</h2>
              <IoCloseOutline
                className="text-2xl cursor-pointer hover:text-red-500"
                onClick={() => handleOrderPopup(false)}
              />
            </div>

            {/* Form Body */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                autoComplete="off"
                className="w-full p-2 rounded-full text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-800 dark:bg-gray-800"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                autoComplete="off"
                className="w-full p-2 rounded-full text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
              />
              <input
                type="text"
                name="address"
                placeholder="Shipping Address"
                autoComplete="off"
                className="w-full p-2 rounded-full text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
              />

              {/* Button */}
              <button
                type="submit"
                className="bg-green-600 dark:bg-blue-600 hover:bg-opacity-90 transition duration-200 text-white py-2 px-6 rounded-full mt-2 shadow-md"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
