import React from "react";
import { RightSide } from "./RightSidebar";
import { Card } from "primereact/card";
import { SideBar } from "./SideBar";
import { Navbar } from "./Navbar";
export const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex sm:gap-3 lg:gap-1 justify-content-between mt-2  p-3 ">
        <SideBar />
        {children}

        <div className=" flex-column gap-2 sm:flex sm:w-3 md:w-4 lg:w-3 rightSide">
          <RightSide />
          <Card className="mt-auto">
            <h4 className="text-sm text-center">Powered By DevNodes</h4>
          </Card>
        </div>
      </div>
    </div>
  );
};
