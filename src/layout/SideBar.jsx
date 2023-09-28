import {React,useState} from "react";

import { Card } from "primereact/card";
import { Link } from "react-router-dom";

export const SideBar = () => {
 const [active,setActive] = useState("Home");
  return (
    <Card className="  sm:block  sm:w-4 md:w-3 lg:w-2 shadow-1 align-self-start sidebarCard  ">
      <ul className="list-none flex flex-column gap-3 justify-content-center  p-2  border-round-lg h-15rem">
       
          <li className={` ${active==="Home"?"surface-900":"transparent"}  surface-border border-round-3xl border-1  text-grey-400 lg:text-sm sm:text-xs sidebarText    `}>
          <Link to="/" className={`${active==="Home"?"text-white":"text-900"} no-underline block  p-2`} onClick={()=>setActive("Home")}>
            Home
            </Link>
          </li>
        

          <li
            className={`  ${active==="topRated"?"surface-900":"transparent"}  border-round-3xl border-1 surface-border   border-round text-grey-400 lg:text-sm  sm:text-xs sidebarText      `}
          >
             <Link to="/top_rated" className={` ${active==="topRated"?"text-white":"text-900"} no-underline text-900 block p-2 `} onClick={()=>{setActive("topRated")}}>  Top Rated Movies</Link>
          
          </li>
     
     
          <li className={`${active==="upcoming"?"surface-900":"transparent"} border-round-3xl border-1 surface-border  border-round lg:text-sm text-grey-400 sm:text-xs sidebarText   `}>
          <Link to="/upcoming" className={`${active==="upcoming"?"text-white":"text-900"} no-underline text-900 block  p-2`} onClick={()=>setActive("upcoming")}>
            Upcoming Movies
            </Link>
          </li>
       
      </ul>
    </Card>
  );
};
