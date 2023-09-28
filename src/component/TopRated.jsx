import React from "react";
import { useTopRatedQuery } from "./../services/moviesApi";
import { CardSwiper } from "../common/CardSwiper";
import { Progress } from "../common/ProgressSpinner";
export const TopRated = () => {
  const { data, isLoading } = useTopRatedQuery();
  return (
    <div className="mt-4 mb-3 ">
      <h3 className="text-left mb-3">TopRated</h3>
      {isLoading ? <Progress /> : <CardSwiper data={data.results} />}
    </div>
  );
};
