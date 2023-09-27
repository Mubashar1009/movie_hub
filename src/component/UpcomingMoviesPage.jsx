import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Progress } from "../common/ProgressSpinner";
import { useUpcomingMoviesQuery } from "../services/moviesApi";
import { CommonMovieCard } from "../common/CommonMovieCard";
export const UpcomingMoviesPage = () => {
  const { data, isLoading } = useUpcomingMoviesQuery();
  return isLoading ? (
    <Progress />
  ) : (
    <CommonMovieCard data={data} title="UpComing Movies" />
  );
};
