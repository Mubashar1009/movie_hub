import React from "react";
import { CommonMovieCard } from "../common/CommonMovieCard";
import { useReleasedMoviesQuery } from "../services/moviesApi";
import { Progress } from "../common/ProgressSpinner";
export const Latest = () => {
  const { data, isLoading } = useReleasedMoviesQuery();
  return isLoading ? (
    <Progress />
  ) : (
    <CommonMovieCard data={data} title="Latest" />
  );
};
