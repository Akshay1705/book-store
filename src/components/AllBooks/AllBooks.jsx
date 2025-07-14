import React from 'react'
import Book1 from '../../assets/books/book1.png'
import Book2 from '../../assets/books/book2.png'
import Book3 from '../../assets/books/book3.webp'
import Book4 from '../../assets/books/book4.jpg'
import Book5 from '../../assets/books/book5.jpg'
import Book6 from '../../assets/books/book6.jpg'
import Book7 from '../../assets/books/book7.jpg'

import { FaStar } from 'react-icons/fa'

const BooksData = [
  {
    id: 1,
    img: Book1,
    title: "INTO THE ICY ABTSS",
    rating: 5.0,
    author: "Evelyn Grant",
  },
  {
    id: 2,
    img: Book2,
    title: "The Adventure Begins",
    rating: 4.5,
    author: "Jack London",
  },
  {
    id: 3,
    img: Book3,
    title: "THE FAMOUS FIVE",
    rating: 4.7,
    author: "Enid Blyton",
  },
  {
    id: 4,
    img: Book4,
    title: "Daughters of a winter night",
    rating: 4.4,
    author: "Doug Belair",
  },
  {
    id: 5,
    img: Book5,
    title: "Eternal Seas",
    rating: 4.5,
    author: "Lexi Rees",
  },
  {
    id: 6,
    img: Book6,
    title: "Beyong The Ocean Door",
    rating: 4.5,
    author: "Amisha Sathi",
  },
  {
    id: 7,
    img: Book7,
    title: "All Good Quests",
    rating: 4.5,
    author: "Joe Graber",
  },
];

const AllBooks = () => {
  return (
    <>
    <div id='all' className='py-10 pt-30 flex justify-center items-center bg-green-100 dark:bg-gray-950 dark:text-blue-700'>
      <div className="container placeholder-gray-100">
        {/* header */}
        <div 
          data-aos="slide-up"
          className="text-center mb-20 max-w-[400px] mx-auto"
        >
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-700 dark:from-blue-700  to-green-500 dark:to-blue-500 mb-2">
            Handpicked for Every Explorer
          </p>
          <h1 className="text-3xl font-bold">All Adventure Books</h1>
          <p className="text-xs text-gray-400">
            Dive into thrilling tales of mountaineering, survival, and epic quests — only at The Adventure Bookstore 
          </p>
        </div>
        {/* books grid */}
        <div 
        data-aos="slide-up"
        >
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-4 '>
            {
              BooksData.map((book) => (
                // book card
                <div key={book.id} className='space-y-3'>
                  <img src={book.img} alt=""
                  className='h-full w-[150px] object-cover rounded-lg mx-auto'
                  />
                  <div>
                    <h2 className='font-semibold'>{book.title}</h2>
                    <p className='text-sm text-gray-700 dark:text-gray-400'>{book.author}</p>
                    <div className='flex items-center mt-1 gap-1'>
                      <FaStar className='text-yellow-300'/>
                      <span className='text-sm text-gray-500 ml-1'>{book.rating}</span>
                    </div>
                  </div>
                </div>
              ))   
            }
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer  bg-green-600 dark:bg-blue-600 text-white py-1 px-5 rounded-md">
              <a href="/#">Explore</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AllBooks