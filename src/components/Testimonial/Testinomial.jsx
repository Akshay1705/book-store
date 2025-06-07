import React from 'react'
import Slider from "react-slick";

const testimonialData = [
    {
      id: 1,
      name: "— Aarav Mehta",
      text: "Absolutely love this bookstore! The collection is diverse and always up-to-date with the latest releases. My order arrived quickly and in perfect condition. Will definitely keep coming back for more!",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "— Ritika Sharma",
      text: "I was blown away by how easy it was to find what I was looking for. The recommendations were spot-on, and the book summaries helped me choose the right reads. Great design and smooth experience!",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "Sachin Tendulkar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
    {
      id: 1,
      name: "Sachin Tendulkar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
    {
      id: 1,
      name: "Sachin Tendulkar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
    {
      id: 1,
      name: "Sachin Tendulkar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
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
    <div className='flex items-center justify-center py-10'>
        <div className="container">
            {/* header */}
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                What Our Customers Says
                </p>
                <h1 className="text-3xl font-bold">Testinomials</h1>
                <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas fugit quasi vitae error explicabo sapiente. Incidunt officiis consectetur aliquid.</p>
            </div>
            {/* testimonials cards */}
            <div>
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