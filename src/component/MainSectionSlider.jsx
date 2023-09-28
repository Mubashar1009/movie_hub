import React from "react";
import { useReleasedMoviesQuery } from "./../services/moviesApi";
import { Progress } from "./../common/ProgressSpinner";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
// import required modules
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
export default function MainSection() {
  const { data, isLoading } = useReleasedMoviesQuery();

  return (
    <>
      {isLoading ? (
        <Progress />
      ) : (
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className=" mySwiper border-round-xl "
          autoplay
        >
          {data.results?.map((movieItem,i) => {
            return (
              <SwiperSlide
              key={i}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movieItem.poster_path})`,
                  backgroundSize: "cover",
                }}
              >
                <Link to={`/detail/${movieItem.id}`} className="no-underline">
                  <div className="flex gap-1 flex-column justify-content-end align-items-start p-3 h-full ">
                    <h4 className="font-bold text-base text-white">
                      {movieItem.title}
                    </h4>
                    <p className="text-sm text-start text-white categoryEllipse">
                      {movieItem.overview}
                    </p>
                    <button
                      className=" button border-1
           p-2
           text-base
           border-round-md
           text-white
           cursor-pointer
           surface-900"
                    >
                      Watch
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
}
