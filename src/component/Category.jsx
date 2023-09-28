import React from "react";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import "./../css/category.css";
function CategoryLink({ path, category }) {
  return (
    
       <Link to={path} className={`${category==="Trending" && "w-6 "} block text-center   no-underline text-800  mt-3 border-round-xl `}>
        <Card className={`${category==="Trending" && "flex justify-content-center align-items-center h-full "}`}>
        {category}
        </Card>
   
    </Link>
  );
}
export const Category = () => {
  return (
    <div>
      <h3 className="text-left">Category</h3>
      <section className="flex justify-content-between gap-2  ">
        <CategoryLink path="/trending/day" category="Trending" />
        <div className="flex flex-column gap-2 w-6">
          <CategoryLink path="/popular" category="Popular" />
          <CategoryLink path="/latest" category="Latest" />
        </div>
      </section>
    </div>
  );
};
