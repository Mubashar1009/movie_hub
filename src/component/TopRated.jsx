import React from "react";
import { useTopRatedQuery } from "./../services/moviesApi";
import { CardSwiper } from "../common/CardSwiper";
import { Progress } from "../common/ProgressSpinner";
export const TopRated = () => {
  const { data, isLoading } = useTopRatedQuery();
  return (
    <div className="mt-2">
      <h3 className="text-left">TopRated</h3>
      {isLoading ? <Progress /> : <CardSwiper data={data.results} />}
    </div>
  );
};
