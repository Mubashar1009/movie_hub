import { React } from "react";
import { TopRated } from "./TopRated";
import MainSectionSlider from "./MainSectionSlider";
import { Category } from "./Category";
import { MainLayout } from "../layout/MainLayout";
export const Home = () => {
  return (
    <div className="sm:block md:w-6 sm:w-8 commonSlider">
      <MainSectionSlider />
      <TopRated />
      <Category />
    </div>
  );
};
