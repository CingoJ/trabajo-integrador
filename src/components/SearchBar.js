import React from "react";
import { useState } from "react";
import "./searchBar.css";
import Products from "./Products";

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

      <table>
        <tr>
          <th></th>
        </tr>

        {Products.map((titulo) => {
          <div>
            <tr>
              <td>{Products.titulo}</td>
            </tr>
          </div>;
        })}
      </table>
    </div>
  );
};

export default SearchBar;
