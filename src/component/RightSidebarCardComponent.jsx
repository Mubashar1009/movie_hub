import React from "react";
import { Knob } from "primereact/knob";
import { Link } from "react-router-dom";
import "./../css/RightSidebarCardComponent.css";
export const RightSidebarCardComponent = ({ date = null, data }) => {
  return (
    <Link
      to={`/detail/${data.id}`}
      className="no-underline align-self-center text-900   w-11 py-2 "
    >
      <div className="flex md:gap-4 sm:gap-2 align-items-center justify-content-between py-2 border-round-3xl componentContainer px-3 sm:flex-wrap md:flex-nowrap  ">
        <div className="flex gap-2 align-items-center w-8 ">
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            className="border-circle containerImage flex-shrink-0"
            alt="Poster"
          />
          <div className="flex flex-column gap-1  ">
            <p className="md:text-sm lg:text-md ellipse font-medium">{data.title}</p>
            <p className="md:text-xs lg:text-sm  text-900 ellipse ">
              {data.overview}
            </p>
          </div>
        </div>
        {date ? (
          <>
            <div className="flex flex-column align-items-center ">
              <h4 className="text-xs font-medium ">Release Date</h4>
              <p className="text-xs font-normal">{date}</p>
            </div>
          </>
        ) : (
          <div className="card flex justify-content-center">
            <Knob
              value={74}
              size={40}
              style={{ fill: "transparent" }}
              valueTemplate={`${74}%`}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default RightSidebarCardComponent;
