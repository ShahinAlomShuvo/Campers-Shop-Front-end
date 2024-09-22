import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import sliderOne from "../../assets/images/slideshow.webp";
import sliderTwo from "../../assets/images/slideshow2.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      img: sliderOne,
      discount: "Get 50% Off",
      title: "Mountain Climbing",
      description:
        "Order online and have your products delivered to your closest store for free",
      buttonText: "Shop Now",
    },
    {
      img: sliderTwo,
      discount: "DISCOUNT 30%",
      title: "Travel Experience",
      description:
        "Order online and have your products delivered to your closest store for free",
      buttonText: "Shop Now",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      className="h-[90vh] w-full"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      effect="fade"
      speed={800}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={slide.img}
              alt="Slide image"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-40 right-10 bg-black bg-opacity-30 p-6 rounded-md">
              <h2 className="text-xl text-white  mb-2">{slide.discount}</h2>
              <p className="text-6xl text-white font-bold mb-4">
                {slide.title}
              </p>
              <p className="text-sm text-white mb-4">{slide.description}</p>
              <Link to={"/products"}>
                <button className="bg-white text-black py-2 px-4 rounded hover:bg-[#ffc107]  transition">
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
