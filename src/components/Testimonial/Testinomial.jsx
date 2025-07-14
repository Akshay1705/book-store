import React from 'react'
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "— Aarav Mehta",
    text: "Absolutely love this adventure bookstore! The collection is wild and thrilling — from Everest climbs to jungle mysteries. Fast delivery and top-notch quality.",
    img: "https://picsum.photos/seed/aarav/101",
  },
  {
    id: 2,
    name: "— Ritika Sharma",
    text: "The moment I saw ‘Into the Icy Abyss’ on the homepage, I knew I had to subscribe. Seamless experience, powerful stories — highly recommended!",
    img: "https://picsum.photos/seed/ritika/102",
  },
  {
    id: 3,
    name: "— Kabir Malhotra",
    text: "Each issue feels like a real expedition. I love flipping through pages with that fresh magazine scent — it’s like holding an adventure in my hands.",
    img: "https://picsum.photos/seed/kabir/103",
  },
  {
    id: 4,
    name: "— Aanya Patel",
    text: "Subscribed to the yearly plan and never looked back. Their magazine quality, delivery, and story selection are unmatched!",
    img: "https://picsum.photos/seed/aanya/104",
  },
  {
    id: 5,
    name: "— Viraj Singh",
    text: "I collect every edition. The covers, the maps, the stories — it's like a coffee-table travelogue. Perfect for adventure lovers!",
    img: "https://picsum.photos/seed/viraj/105",
  },
  {
    id: 6,
    name: "— Priya Desai",
    text: "Fast shipping, beautiful prints, and such captivating themes! It’s not just reading — it’s an experience.",
    img: "https://picsum.photos/seed/priya/106",
  },
];


const Testinomial = () => {
    // settings for the slider
var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='flex items-center justify-center py-10 bg-green-100 dark:bg-gray-950 dark:text-blue-600'>
        <div className="container">
            {/* header */}
            <div 
              data-aos="slide-up"
              className="text-center mb-20 max-w-[500px] mx-auto"
            >
              <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-700 dark:from-blue-700  to-green-500 dark:to-blue-500 mb-2">
                What Our Adventurous Readers Say
              </p>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                Book Trails & Tales
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Hear from fellow explorers who've journeyed through thrilling pages, discovered hidden gems, and fueled their wanderlust—one book at a time.
              </p>
            </div>

            {/* testimonials cards */}
            <div
            data-aos="zoom-in"
            >
                {/* slider */}
                <Slider {...settings}>
                {testimonialData.map((data) => {
                    return (
                        <div className="my-6">
                            <div
                              key={data.id}
                              className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                            >
                                <div>
                                  <img
                                    className="rounded-full w-20 h-20"
                                    src={data.img}
                                    alt=""
                                  />
                                </div>
                                <div className="flex items-center gap-4">
                                  <div>
                                    <p className="text-gray-500 text-sm">{data.text}</p>
                                    <h1 className="text-xl font-bold text-black/80 dark:text-white">
                                      {data.name}
                                    </h1>
                                  </div>
                                </div>
                                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                  ,,
                                </p>
                            </div>
                        </div>
                    );
                })}
                </Slider>
            </div>

        </div>
    </div>
  )
}

export default Testinomial