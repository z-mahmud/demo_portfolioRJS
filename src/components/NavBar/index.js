import React, { useState } from "react";
import "./style.css";
import imgs from "../../assets/icon/search.png";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function NavBar
 **/

const NavBar = (props) => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("search complete");
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? "searchInput active" : "searchInput";
  //const searchClass = "searchInput";
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/post">Post</NavLink>
        </li>
        <li>
          <NavLink to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input
            className={searchClass}
            type="text"
            placeholder="Search"
          ></input>
          <img
            className="searchIcone"
            onClick={openSearch}
            src={imgs}
            alt="Search"
          ></img>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
