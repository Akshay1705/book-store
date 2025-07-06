import adventure from '../../assets/website/adventure.png';
import { GiMountainClimbing, GiCompass, GiReceiveMoney } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div id='about' className='py-10 pt-30 bg-green-100 dark:bg-gray-950 dark:text-blue-600'>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 mx-3">
            {/* image section */}
            <div>
              <img
                data-aos="zoom-in"
                src={adventure}
                alt="Adventure library"
                className='max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
              />
            </div>

            {/* text section */}
            <div
              data-aos="slide-up"
              className='flex flex-col justify-center gap-6 sm:pt-0 text-center sm:text-left dark:text-blue-600'
            >
              <h1 className='text-3xl sm:text-4xl font-bold'>
                Adventure Awaits — On Every Page
              </h1>
              <p className='text-sm text-gray-500 tracking-wide leading-5'>
                Discover gripping tales of mountain climbs, lost islands, and daring expeditions.
                Whether you're a thrill-seeker or a dreamer, our collection brings the world’s wildest adventures to your fingertips.
              </p>

              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                  <GiMountainClimbing className='text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-blue-200 dark:bg-blue-400' />
                  <p>Top Adventure Picks</p>
                </div>

                <div className="flex items-center gap-4">
                  <GiCompass className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-purple-200 dark:bg-purple-400" />
                  <p>Curated Explorations</p>
                </div>

                <div className="flex items-center gap-4">
                  <FaShippingFast className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200 dark:bg-green-400" />
                  <p>Fast & Safe Delivery</p>
                </div>

                <div className="flex items-center gap-4">
                  <GiReceiveMoney className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-200 dark:bg-yellow-400" />
                  <p>Easy Payments & Great Deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
