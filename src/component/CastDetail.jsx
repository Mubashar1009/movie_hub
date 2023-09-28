import React from "react";
import { Card } from "primereact/card";
import { useParams } from "react-router-dom";
import { useCastDetailQuery } from "../services/moviesApi";
import { Progress } from "../common/ProgressSpinner";
import { Image1 } from "./../images/image";
export const CastDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useCastDetailQuery(id);

  return isLoading ? (
    <Progress />
  ) : (
    <Card className=" lg:w-6 align-self-start sm:w-5 commonSlider   ">
      <div className="flex gap-3 justify-content-center px-2 sm:flex-wrap lg:flex-nowrap md:px-1 castDetail ">
        <img
          src={`https://image.tmdb.org/t/p/original${data?.profile_path}`}
          alt="Photo"
          className=" md:h-25rem border-round-3xl sm:w-full lg:w-6 castDetialData "
        />
        <div className=" flex flex-column gap-3 justify-content-between sm:w-full lg:w-6">
          <h4 className="text-900">
            Name: <span className="text-black-alpha-50">{data?.name}</span>
          </h4>
          <h4 className="text-900">
            Birthday:
            <span className="text-black-alpha-50">{data?.birthday}</span>
          </h4>

          <h4 className="text-900">
            Place of Birth:
            <span className="text-black-alpha-50">{data?.place_of_birth}</span>
          </h4>
          <h4 className="text-900">
            Department:
            <span className="text-black-alpha-50">
              {data?.known_for_department}
            </span>
          </h4>
          <h4 className="text-900">
            Popularity:
            <span className="text-black-alpha-50">{data?.popularity}</span>
          </h4>
          <h4 className="text-900">Also Known for:</h4>
          {data?.also_known_as.map((information,i) => (
            <span key={i} className="mr-3 text-black-alpha-50">{information}</span>
          ))}
        </div>
      </div>
    </Card>
  );
};
