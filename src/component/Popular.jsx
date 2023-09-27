import React from "react";
import { usePopularMoviesQuery } from "../services/moviesApi";
import { CommonMovieCard } from "../common/CommonMovieCard";
import { Progress } from "../common/ProgressSpinner";
export const Popular = () => {
  const { data, isLoading } = usePopularMoviesQuery();
  return isLoading ? (
    <Progress />
  ) : (
    <CommonMovieCard data={data} title="Popular" />
  );
};
