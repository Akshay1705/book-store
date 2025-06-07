import React from 'react'
import Book1 from '../../assets/books/book1.jpg'
import Book3 from '../../assets/books/book3.jpg'
import Book2 from '../../assets/books/book2.jpg'
import { FaStar } from 'react-icons/fa'

const BooksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
];

const AllBooks = () => {
  return (
    <>
    <div className='py-10 flex justify-center items-center'>
      <div className="container placeholder-gray-100">
        {/* header */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
          Top books For You
          </p>
          <h1 className="text-3xl font-bold">Top Books</h1>
          <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas fugit quasi vitae error explicabo sapiente. Incidunt officiis consectetur aliquid.</p>
        </div>
        {/* books grid */}
        <div>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-4 '>
            {
              BooksData.map((book) => (
                // book card
                <div key={book.id} className='space-y-3'>
                  <img src={book.img} alt=""
                  className='h-[220px] w-[150px] object-cover rounded-lg mx-auto'
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
            <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
              View All Books
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AllBooks