import React from 'react'
import Img1 from '../../assets/books/book1.png'
import Img2 from '../../assets/books/book2.png'
import Img3 from '../../assets/books/book3.webp'
import { FaStar } from "react-icons/fa";

const BooksData = [
    {
        id: 1,
        img: Img1,
        title: "Into the Icy Abyss",
        description:
          "Trapped beneath Everest’s deadly icefall after a catastrophic avalanche, a seasoned mountaineer fights against nature and time to survive the ultimate descent into the unknown.",
      },
      {
        id: 2,
        img: Img2,
        title: "The Adventure Begins",
        description:
          "The Adventure Begins is a thrilling tale of courage, discovery, and survival. From towering mountains to hidden jungles, it follows a daring journey into the unknown where every step holds danger—and destiny. Perfect for those who crave the rush of the wild.",
      },
      {
        id: 3,
        img: Img3,
        title: "The Famous Five",
        description:
          "The Famous Five follows four children and their loyal dog as they dive into thrilling mysteries and daring adventures. From hidden treasure to secret passages, they uncover danger and excitement wherever they go. A classic tale of friendship, courage, and childhood discovery.",
      },
  ];

const BestBooks = ({handleOrderPopup}) => {
  return (
    <>
    <div id='bestbooks' className="pt-30 bg-green-100 dark:bg-gray-950 dark:text-blue-600">
        <div className="w-full flex flex-col items-center justify-center">
            {/* header section */}
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-700 dark:from-blue-700  to-green-500 dark:to-blue-500 mb-2">
                    Adventure Awaits
                </p>
                <h1 className="text-3xl font-bold">Explore Our Best Adventure Books</h1>
                <p className="text-xs text-gray-400">
                    From towering peaks to lost islands, discover thrilling tales of courage, exploration, and the untamed spirit of adventure.
                </p>
            </div>
            {/* card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mx-4">
                {
                    BooksData.map((book) => (
                        <div 
                        data-aos="zoom-in"
                        key={book.id}
                        className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-green-500  dark:hover:bg-blue-700 hover:text-white relative shadow-xl duration-high group max-w-[300px] my-8'>
                            <div className='h-[100px] '>
                                <img 
                                src={book.img} 
                                alt=""
                                className='max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md' />
                            </div>
                            <div className="p-4 text-center">
                               <div className='w-full flex items-center justify-center gap-1'>
                                  <FaStar className='text-yellow-400' />
                                  <FaStar className='text-yellow-400' />
                                  <FaStar className='text-yellow-400' />
                                  <FaStar className='text-yellow-400' />
                                </div>
                                <h1 className="text-xl font-bold">{book.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">{book.description}</p>
                                <button
                                  onClick={handleOrderPopup}
                                  className="bg-green-600 dark:bg-blue-600 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white dark:group-hover:bg-white group-hover:text-green-700 dark:group-hover:text-blue-700">
                                    Order Now
                                </button> 
                            </div>
                        </div>
                    )) 
                }
                
            </div>
        </div>
    </div>
    </>
  )
}

export default BestBooks