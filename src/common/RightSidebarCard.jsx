import React from "react";
import { Card } from "primereact/card";
import "./../css/common.css";
import { useNavigate } from "react-router-dom";
import { RightSidebarCardComponent } from "./../component/RightSidebarCardComponent";
export const RightSidebarCard = ({ title, data, date = null, url }) => {
  const navigate = useNavigate();
  const cardItems = data.slice(0, 2);
  return (
    <Card className="flex flex-column  ">
      <div className=" flex flex-column  gap-2     ">
        <h6 className="text-base font-semibold mb-2 text-center">{title}</h6>
        {cardItems.map((item) => {
          return <RightSidebarCardComponent data={item} date={date} />;
        })}
        <button
          className=" button  align-self-center cursor-pointer p-1  rightSidebarButton text-sm text-white border-round-sm border-none"
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
