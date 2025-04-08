import { React, useState } from "react";
import "./../css/common.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
export const CommonMovieCard = ({ data, title = null, day = null }) => {
  const [days, setDays] = useState("day");
  const navigate = useNavigate();
  return (
    <div className=" sm:w-5 lg:w-6 commonSlider ">
      <div
        className={`flex ${
          day ? "justify-content-between" : "justify-content-center"
        } align-items-center mb-2`}
      >
        <h3 className="text-center mb-2">{title}</h3>
        {day && (
          <div className="list-none flex gap-1 border-1  align-items-center border-round-2xl ">
            <button
              onClick={() => {
                setDays("day");
                navigate("/trending/day");
              }}
              className={`${
                days === "day" ? "navLink" : "navButton"
              }  no-underline cursor-pointer w-6 px-2`}
            >
              Day
            </button>

            <button
              onClick={() => {
                setDays("week");
                navigate("/trending/week");
              }}
              className={`${
                days === "week"
                  ? "navLink border-round-right-2xl border-noround-left"
                  : "navButton"
              }  no-underline  cursor-pointer w-6  px-2`}
            >
              Week
            </button>
          </div>
        )}
      </div>
      <Card className="  px-3  ">
        <div className="flex sm:gap-3 lg:gap-4  flex-wrap  md:justify-content-center lg:justify-content-start commonDiv  ">
          {data?.results.map((movieItem,i) => {
            if (movieItem.poster_path !== null) {
              return (
                <div
                  className="commonMovieCardContainer bg-cover border-round-xl "
                  key={i}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieItem.poster_path})`,
                  }}
                >
                  <Link
                    to={`/detail/${movieItem.id}`}
                    className="no-underline  "
                  >
                    <Card className="flex flex-column gap-1 justify-content-end border-round-xl align-items-start h-full pl-3 bg-transparent ">
                      <h3 className="text-400 text-white ">
                        {movieItem.title}
                      </h3>
                      {/* <p>{movieItem.overview}</p> */}
                      <button
                        className=" border-none
           p-1
           text-base
           border-round-md
           text-white
           cursor-pointer
           surface-900"
                      >
                        Watch
                      </button>
                    </Card>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </Card>
    </div>
  );
};
