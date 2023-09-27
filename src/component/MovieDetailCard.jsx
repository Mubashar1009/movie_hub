import React from "react";

export const MovieDetailCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${detailMovie?.poster_path})`,
        backgroundSize: "cover",
        height: "400px",
      }}
    >
      <div className="flex flex-column justify-content-end align-items-start p-3 h-full ">
        <h4 className="font-bold text-base text-red-900">
          {detailMovie?.title}
        </h4>
        <p className="text-sm text-start text-white">{detailMovie?.overview}</p>
        <button
          className=" border-none
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
    </div>
  );
};
