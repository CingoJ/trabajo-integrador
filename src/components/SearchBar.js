import React from "react";
import { useState } from "react";
import "./searchBar.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const Products = [];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    Products.filter((titulo) => {
      return Products.titulo.match(searchInput);
    });
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Buscar productos"
        onChange={handleChange}
        value={searchInput}
      />

      <ul>
        <li></li>

        {Products.map((titulo) => {
          <div>
            <ul>
              <li>{Products.titulo}</li>
            </ul>
          </div>;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
