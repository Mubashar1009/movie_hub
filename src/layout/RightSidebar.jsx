import React from "react";
import { Progress } from "./../common/ProgressSpinner";
import { RightSidebarCard } from "../common/RightSidebarCard";
import {
  useTopRatedQuery,
  useUpcomingMoviesQuery,
} from "./../services/moviesApi";
export const RightSide = () => {
  const url = ["/top_rated", "/upcoming"];
  const {
    data: TopRatedMovies,

    isLoading: loadingTopRatedMovies,
  } = useTopRatedQuery();
  const {
    data: upcomingMovies,

    isLoading: loadingUpcomingMovies,
  } = useUpcomingMoviesQuery();

  return (
    <>
      {loadingTopRatedMovies ? (
        <Progress />
      ) : (
        <RightSidebarCard
          title="Top Rated Movies"
          data={TopRatedMovies.results}
          url={url[0]}
        />
      )}

      {loadingUpcomingMovies ? (
        <Progress />
      ) : (
        <RightSidebarCard
          title="Upcoming Movies"
          data={upcomingMovies.results}
          date={upcomingMovies.dates.maximum}
          url={url[1]}
        />
      )}
    </>
  );
};
