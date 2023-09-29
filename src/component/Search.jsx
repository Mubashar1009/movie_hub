import { React, useState } from "react";
import { Link } from "react-router-dom";
import { AutoComplete } from "primereact/autocomplete";
import { useSearchMoviesQuery } from "../services/moviesApi";
import "./../css/autoComplete.css";
export const Search = () => {
 
  const [value, setValue] = useState("");
  const [items, setItems] = useState(null);
  const [movie,setMovie] = useState("");
  const { data, isLoading } = useSearchMoviesQuery(movie);

  const handleInputChange = (e) => {
    if (typeof e.value === "string") {
      setValue(e.value);
    } else {

      setValue("");
    }
  };
  const search = (event) => {
        setMovie(event.query);
    // const movieItems = data?.results;
    // const dataItems = movieItems.filter((item) =>
    //   item.title.toLowerCase().startsWith(event.query.toLowerCase())
    // );
    const movies = data?.results.map((item,i) => (
      <div className="flex  border-50" style={{width:"180px"}} key={i}>
        <Link
          to={`/detail/${item.id}`}
          className="w-full text-900 no-underline px-4 py-2 white-space-normal "
        >
          {item.title}
        </Link>
      </div>
    ));

    setItems(movies);
  };

  return (
    <AutoComplete
      className="autoCompleted border-round-3xl h-2rem "
      value={value}
      suggestions={items}
      completeMethod={search}
      onChange={handleInputChange}
      placeholder="What You Want to Watch?"
    />
  );
};
