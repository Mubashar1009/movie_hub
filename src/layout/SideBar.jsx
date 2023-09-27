import React from "react";

import { Card } from "primereact/card";
import { Link } from "react-router-dom";
// \enhance this with links
export const SideBar = () => {
  return (
    <Card class=" sm:w-3 lg:w-2 sm:block sidebarCard">
      <ul className="list-none flex flex-column gap-3   ml-2 border-round-lg h-15rem">
        <Link to="/" className="no-underline text-900">
          <li className="  p-2 border-green-100 border-round-3xl border-1  text-grey-400 lg:text-sm sm:text-xs sidebarText    ">
            Home
          </li>
        </Link>
        <Link to="/top_rated" className="no-underline text-900">
          <li
            className={` border-round-3xl border-1 border-green-100 p-2 border-round text-grey-400 lg:text-sm  sm:text-xs sidebarText      `}
          >
            Top Rated Movies
          </li>
        </Link>
        <Link to="/upcoming" className="no-underline text-900">
          <li className=" border-round-3xl border-1 border-green-100  p-2 border-round lg:text-sm text-grey-400 sm:text-xs sidebarText   ">
            Upcoming Movies
          </li>
        </Link>
      </ul>
    </Card>
  );
};
