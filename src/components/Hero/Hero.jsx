import {useState} from 'react'
import Book1 from '../../assets/books/book1.jpg'
import Book3 from '../../assets/books/book3.jpg'
import Book2 from '../../assets/books/book2.jpg'
import vector from '../../assets/website/blue-pattern.png'

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "Who's There",
    description:
      "A gripping tale of mystery and suspense that explores the unknown. When a strange knock disrupts a quiet night, a journey into fear and discovery begins.",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life Will Forever Be Changed",
    description:
      "An emotional story of transformation and hope. Follow the journey of a man whose life takes an unexpected turn, revealing the true meaning of resilience.",
  },
  {
    id: 4,
    img: Book3,
    title: "Lost Boy",
    description:
      "A haunting yet inspiring narrative about a boy's search for identity and belonging. Through trials and revelations, he discovers the strength to forge his own path.",
  },
];


const Hero = ({handleOrderPopup}) => {
    const [imageId,setImageId] = useState(Book2);
    const [title , setTitle] = useState('Life will forever be changed');
    const [description , setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quibusdam!');

const bgImage = {
    backgroundImage: `url(${vector})`,
    backgroundPostiton: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  };
  return (
    <>
        <div
            className='min-h-[550px] sm:min-h-[650px] bg-gray-200 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'
            style={bgImage}
        >
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-4 sm:gap-8 mx-4">
                    {/* text content selection */}
                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
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
                            className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full mt-3'>order now</button>
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