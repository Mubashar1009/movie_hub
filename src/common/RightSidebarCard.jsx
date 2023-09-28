import React from "react";
import { Card } from "primereact/card";
import "./../css/common.css";
import { useNavigate } from "react-router-dom";
import { RightSidebarCardComponent } from "./../component/RightSidebarCardComponent";
export const RightSidebarCard = ({ title, data, date = null, url }) => {
  const navigate = useNavigate();
  const cardItems = data.slice(0, 2);
  return (
    <Card className="flex mb-5 ">
      <div className=" flex flex-column  gap-2     ">
        <h6 className="text-base font-semibold mb-2 text-center">{title}</h6>
        {cardItems.map((item,i) => {
          return <RightSidebarCardComponent data={item} date={date} key={i} />;
        })}
        <button
          className=" button  align-self-center cursor-pointer p-1  rightSidebarButton text-sm text-white border-round-sm border-1"
          onClick={() => {
            navigate(url);
          }}
        >
          Show More!
        </button>
      </div>
    </Card>
  );
};
