import { React } from "react";
import { Menu } from "../component/Menu";
import { Search } from "./../component/Search";
import { SignUpForm } from "../component/SingUpForm";
export const Navbar = () => {
  return (
    <div className="sticky top-0 right-0 z-5 bg-white-alpha-90  ">
      <div className="flex  p-3 justify-content-between  align-items-center  p-1 shadow-1   ">
        <img
          className="movieimage"
          width="34"
          height="34"
          src="https://img.icons8.com/dusk/64/movie-projector.png"
          alt="movie-projector"
        />
        <Menu />
        <div class="flex gap-3">
          <span className="p-input-icon-left">
            <Search />
          </span>

          <SignUpForm></SignUpForm>
        </div>
      </div>
    </div>
  );
};
