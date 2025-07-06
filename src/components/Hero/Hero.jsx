import {useState} from 'react'
import Book1 from '../../assets/books/book1.png'
import Book2 from '../../assets/books/book2.jpg'
import Book3 from '../../assets/books/book3.webp'

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "Into the Icy Abyss",
    description:
      "Trapped beneath Everest’s deadly icefall after a catastrophic avalanche, a seasoned mountaineer fights against nature and time to survive the ultimate descent into the unknown.",
  },
  {
    id: 2,
    img: Book2,
    title: "Adventure",
    description:
      "Adventure is a thrilling tale of courage, discovery, and survival. From towering mountains to hidden jungles, it follows a daring journey into the unknown where every step holds danger—and destiny. Perfect for those who crave the rush of the wild.",
  },
  {
    id: 4,
    img: Book3,
    title: "The Famous Five",
    description:
      "The Famous Five follows four children and their loyal dog as they dive into thrilling mysteries and daring adventures. From hidden treasure to secret passages, they uncover danger and excitement wherever they go. A classic tale of friendship, courage, and childhood discovery.",
  },
];


const Hero = ({handleOrderPopup}) => {
    const [imageId,setImageId] = useState(Book2);
    const [title , setTitle] = useState('Adventure');
    const [description , setDescription] = useState('Adventure is a thrilling tale of courage, discovery, and survival. From towering mountains to hidden jungles, it follows a daring journey into the unknown where every step holds danger—and destiny. Perfect for those who crave the rush of the wild.');
  return (
    <>
        <div
            className='min-h-[550px] sm:min-h-[650px] bg-green-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'
        >
            <div className="container mt-0 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-4 sm:gap-8 mt-2">
                    {/* text content selection */}
                    <div className='flex flex-col justify-center gap-4 pt-6 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                        <h1 
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                            {title}
                        </h1>
                        <p 
                        data-aos="slide-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className='text-sm'>
                            {description}
                        </p>
                        <div>
                        <button 
                        onClick={handleOrderPopup}
                        data-aos="zoom-in"
                        data-aos-duration="500"
                        className="bg-green-600 dark:bg-blue-600 hover:bg-opacity-90 transform hover:scale-105 transition duration-300 text-white py-2 px-6 rounded-full mt-3 shadow-md"
                        >
                        Order Now
                        </button>
                        </div>
                    </div>
                    {/* image selection */}
                    <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 '>
                        {/* main image */}
                        <div className='h-[300px] sm:h-[450px] overflow-hidden'>
                            <img 
                            data-aos="zoom-in"
                            data-aos-once="true"
                            src={imageId} 
                            alt=""  
                            className="h-full min-w-auto object-contain mx-auto" />
                        </div>
                        {/* other image */}
                        <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[20px] lg:-right-1'>
                            {
                                ImageList.map((data) => (
                                    <img 
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        src={data.img} 
                                        key={data.id} 
                                        className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                                        onClick={
                                            ()=>{
                                                setImageId(
                                                    data.id === 1 ? Book1 : data.id === 2 ? Book2 : Book3
                                                  );
                                                  setTitle(data.title);
                                                  setDescription(data.description);
                                            }
                                        }
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero