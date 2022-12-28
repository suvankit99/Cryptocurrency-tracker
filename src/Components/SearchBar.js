import { useState } from "react";
import "./SearchBar.css"
const SearchBar = (props) => {
    const handleChange = (event) => {
        const search = event.target.value ;
        props.onChange(search) ;
    }
  return (
    <div className="search-container">
      <form className="search-form">
        <input type="text" onChange={handleChange} placeholder = " Search for currency" className="search-value" autoFocus="autofocus"></input>
      </form>
      
    </div>
  );
};

export default SearchBar;
