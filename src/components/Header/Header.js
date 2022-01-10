import React from "react";
//import Filter from "../Filter/Filter";
import "./Header.css";

let selectedCategory = "";

export default function Header({ categories, onChange }) {
  return (
    <nav className="product-filter">
      <h1>Go Code Shop</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            onChange={() =>
              onChange((e) => (selectedCategory = e.target.value))
              
            }
          >
            <option selected="selected" disabled="disabled">
              choose a category
            </option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div class="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
