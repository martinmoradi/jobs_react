import { useState, useEffect } from 'react'
import autoComplete from '../../helpers/autocomplete.js'

const SearchBar = () => {
  const [state, setState] = useState()
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    if (state && state.length >= 3) {
      autoComplete(state, setSuggestions)
      }
  }, [state])

  return (
    <div>
      <form>
        <input
          className="searchbar"
          type="text"
          onChange={(event) => setState(event.target.value)}
          value={state}
          placeholder="Type to search"
        ></input>
        <div className="searchbar_suggestions">
          {suggestions && suggestions.map((suggest) => <li>{suggest.suggestion}</li>)}
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
