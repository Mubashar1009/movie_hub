import React from "react";
import { MainLayout } from "./../layout/MainLayout";
import { CommonMovieCard } from "../common/CommonMovieCard";
import { Progress } from "../common/ProgressSpinner";
import { useTopRatedQuery } from "../services/moviesApi";
export const TopRatedPage = () => {
  const { data, error, isLoading } = useTopRatedQuery();

  return isLoading ? (
    <Progress />
  ) : (
    <CommonMovieCard data={data} title="Top Rated Movies" />
  );
};
