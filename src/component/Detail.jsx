import React from "react";
import { useParams } from "react-router-dom";
import { Cast } from "../common/Cast";
import { Chip } from "primereact/chip";
import { CardSwiper } from "../common/CardSwiper";
import { Progress } from "../common/ProgressSpinner";
import {
  useDetailMovieQuery,
  useKeywordsQuery,
  useSimilarMoviesQuery,
} from "../services/moviesApi";
export const Detail = () => {
  const { id } = useParams();
  const { data: detailMovie, isLoading: loadingDetialMovie } =
    useDetailMovieQuery(id);
  const { data: movieKeywords } = useKeywordsQuery(id);
  const { data: similarMovies, isLoading: loadingSimilarMovies } =
    useSimilarMoviesQuery(id);

  return (
    <div className="lg:w-6 border-round-lg flex flex-column gap-2 sm:w-5  commonSlider ">
      {loadingDetialMovie ? (
        <Progress />
      ) : (
        <div
          className=" lg:h-25rem sm:h-20rem  detialDiv "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${detailMovie?.poster_path})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-column justify-content-end align-items-start p-3 h-full ">
            <h4 className="font-bold lg:text-base sm:text-sm text-red-900">
              {detailMovie?.title}
            </h4>
            <p className="sm:text-xs lg:text-sm text-start text-white">
              {detailMovie?.overview}
            </p>
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
      )}
      <div>
        {movieKeywords?.keywords?.map((item) => (
          <Chip label={item.name} className="bg-grey-300 ml-1" />
        ))}
      </div>
      <h3 className="mb-2">Cast</h3>
      <Cast />

      <h3 className="mb-2">Similar Movies</h3>
      {loadingSimilarMovies ? (
        <Progress />
      ) : (
        <CardSwiper data={similarMovies.results} />
      )}
    </div>
  );
};
