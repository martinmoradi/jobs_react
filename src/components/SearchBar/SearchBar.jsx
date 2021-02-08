import { useState, useEffect } from "react";
import autoComplete from "../../helpers/autocomplete.js";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [state, setState] = useState();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (state && state.length >= 3) {
      autoComplete(state, setSuggestions);
    }
  }, [state]);

  return (
    <div>
      <form className="py-8">
        <input
          className="searchbar px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
          type="text"
          onChange={(event) => setState(event.target.value)}
          placeholder="Type to search your next dream job"
        ></input>
        <div className="searchbar_suggestions container-xs mx-auto">
          {suggestions &&
            suggestions.map((suggest) => (
              <Link to={`/jobs/${suggest.uuid}`} key={suggest.uuid}>
                <li>{suggest.suggestion}</li>
              </Link>
            ))}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
