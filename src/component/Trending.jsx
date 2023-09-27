import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { useTrendingMoviesQuery } from "../services/moviesApi";
import { CommonMovieCard } from "../common/CommonMovieCard";
import { Progress } from "../common/ProgressSpinner";
import { Link } from "react-router-dom";

export const Trending = () => {
  const { day } = useParams();

  const { data, isLoading } = useTrendingMoviesQuery(day);

  return isLoading ? (
    <Progress />
  ) : (
    <CommonMovieCard data={data} title="Trending" day={day} />
  );
};
