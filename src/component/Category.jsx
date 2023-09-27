import React from "react";
import { Link } from "react-router-dom";
import "./../css/category.css";
function CategoryLink({ path, category }) {
  return (
    <Link
      to={path}
      className={` ${
        category === "Trending" ? "categoryHorror" : "categoryParagraph"
      } no-underline text-800 flex justify-content-center align-items-center mt-2 border-round-xl surface-400`}
    >
      {category}
    </Link>
  );
}
export const Category = () => {
  return (
    <div>
      <h3 className="text-left">Category</h3>
      <section className="flex justify-content-between gap-2  align-items-center">
        <CategoryLink path="/trending/day" category="Trending" />
        <div className="flex flex-column gap-2 w-6">
          <CategoryLink path="/popular" category="Popular" />
          <CategoryLink path="/latest" category="Latest" />
        </div>
      </section>
    </div>
  );
};
