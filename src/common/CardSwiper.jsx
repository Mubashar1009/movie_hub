import React from "react";
import { Rating } from "primereact/rating";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
export const CardSwiper = ({ data }) => {
  return (
    <Swiper
      breakpoints={{
        375: { spaceBetween: 15,slidesPerView:1.5 },
        576: { spaceBetween: 30,slidesPerView:2 },
        768: { spaceBetween: 15,slidesPerView:1.5 },
        1240: { spaceBetween: 15,slidesPerView:3}
      }}
      
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      autoplay
    >
      {data.map((movieItem, i) => {
        if (movieItem?.poster_path !== null) {
          return (
            <SwiperSlide
            key={i}
              className="p-4 bg-cover border-round-xl"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieItem.poster_path})`,
              }}
            >
              <Link to={`/detail/${movieItem.id}`} className="no-underline">
                <div className="flex flex-column justify-content-end gap-3 font-bold h-full">
                  <h4 className="text-900 cardSwiperTitle text-white text-base">
                    {movieItem.title}
                  </h4>
                  <div className="card flex justify-content-center">
                    <Rating
                      value={5}
                      readOnly
                      cancel={false}
                      className="flex text-white "
                    />
                  </div>
                  <div className="flex gap-3 justify-content-center">
                    <i className=" pi pi-heart-fill  text-base"></i>
                    <i className="pi pi-share-alt text-white text-base"></i>
                    <i className="pi pi-bookmark-fill text-base text-blue-600 "></i>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
};
