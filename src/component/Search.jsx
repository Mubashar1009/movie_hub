import { React, useState } from "react";
import { Link } from "react-router-dom";
import { AutoComplete } from "primereact/autocomplete";
import { useReleasedMoviesQuery } from "../services/moviesApi";
import "./../css/autoComplete.css";
export const Search = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(null);
  const { data, isLoading } = useReleasedMoviesQuery();

  const handleInputChange = (e) => {
    if (typeof e.value === "string") {
      setValue(e.value);
    } else {
      // console.log(e.value.props.children.props.children);
      setValue("");
    }
  };
  const search = (event) => {
    const movieItems = data?.results;
    const dataItems = movieItems.filter((item) =>
      item.title.toLowerCase().startsWith(event.query.toLowerCase())
    );
    const movies = dataItems.map((item) => (
      <div className="flex  border-50">
        <Link
          to={`/detail/${item.id}`}
          className="w-full text-900 no-underline px-4 py-2 "
        >
          {item.title}
        </Link>
      </div>
    ));

    setItems(movies);
  };

  return (
    <AutoComplete
      className="autoCompleted border-round-3xl  "
      value={value}
      suggestions={items}
      completeMethod={search}
      onChange={handleInputChange}
      placeholder="What You Want to Watch?"
    />
  );
};
