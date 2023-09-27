import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useCastQuery } from "../services/moviesApi";
import { Progress } from "./ProgressSpinner";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules

import { Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";
export const Cast = () => {
  const { id } = useParams();
  const { data, isLoading } = useCastQuery(id);

  return isLoading ? (
    <Progress />
  ) : (
    <Swiper
      breakpoints={{
        425: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1440: { slidesPerView: 3 },
      }}
      // slidesPerView={3}
      spaceBetween={30}
      modules={[Autoplay]}
      className="mySwiper"
      autoplay
    >
      {data.cast.map((movieItem) => {
        if (movieItem?.profile_path !== null) {
          return (
            <SwiperSlide
              className="flex flex-column justify-content-end p-4  bg-cover border-round  "
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieItem.profile_path})`,
              }}
            >
              <Link
                to={`/castdetail/${movieItem.id}`}
                className="h-full no-underline flex justify-content-center align-items-end"
              >
                <h4 className="text-900 m  text-white text-base ">
                  {movieItem.character}
                </h4>
              </Link>
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
};
