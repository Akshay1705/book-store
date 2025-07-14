import React from 'react'
import PlayStoreImg from '../../assets/website/play_store.png'
import AppStoreImg from '../../assets/website/app_store.png'
const AppStore = () => {
  return (
  <>
    <div className='bg-green-100 dark:bg-gray-800 text-white py-10 flex justify-center items-center'>
      <div className='container'>
        {/* banner container */}
        <div className='space-y-6 max-w-xl mx-auto '>
          {/* banner heading */}
          <h1 
          className='text-2xl text-black text-center sm:text-4xl dark:text-white font-semibold'
          >Your favorite books, just a tap away.
          </h1>
          {/* applestore playstore image */}
          <div 
          className='flex flex-wrap justify-center items-center gap-4 lg:gap-6'>
            <a href="/#">
              <img 
              src={PlayStoreImg} alt=""
              className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
              />
            </a>
            <a href="/#">
              <img 
              src={AppStoreImg} alt="" 
              className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default AppStore