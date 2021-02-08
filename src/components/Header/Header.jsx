import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <h1>THP Jobs</h1>
      </Link>
      <SearchBar />
    </header>
  );
};

export default Header;
