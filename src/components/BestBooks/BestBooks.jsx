import React from 'react'
import Img1 from '../../assets/books/book1.jpg'
import Img3 from '../../assets/books/book3.jpg'
import Img2 from '../../assets/books/book2.jpg'
import { FaStar } from "react-icons/fa";

const BooksData = [
    {
      id: 1,
      img: Img1,
      title: "Who's there",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      
    },
    {
      id: 2,
      img: Img2,
      title: "His Life",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Img3,
      title: "Lost Boy",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

const BestBooks = ({handleOrderPopup}) => {
  return (
    <>
    <div id='bestbooks' className="pt-30">
        <div className="w-full flex flex-col items-center justify-center">
            {/* header section */}
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                    Trending Books
                </p>
                <h1 className="text-3xl font-bold">Best Books</h1>
                <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas fugit quasi vitae error explicabo sapiente. Incidunt officiis consectetur aliquid.</p>
            </div>
            {/* card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mx-4">
                {
                    BooksData.map((book) => (
                        <div 
                        data-aos="zoom-in"
                        key={book.id}
                        className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] my-8'>
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
                                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
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