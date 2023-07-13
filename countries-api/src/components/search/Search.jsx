import { React, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import "./Search.css";

function Search({ onSearch, onFilter }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [regionState, setRegionState] = useState(true);

  const handleRegion = () => {
    if (regionState) {
      document.getElementById("regionsContainer").style.display = "flex";
      setRegionState(false);
    } else {
      document.getElementById("regionsContainer").style.display = "none";
      setRegionState(true);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = (region) => {
    onFilter(region);
    handleRegion();
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="searchContainer">
      <form onSubmit={handleSearchSubmit} className="searchBarContainer">
        <input
          type="text"
          placeholder="Search country..."
          value={searchQuery}
          onChange={handleSearchChange}
          id="countrySearch"
        />
        <button type="submit" id="aisearch">
          <AiOutlineSearch />
        </button>
      </form>

      <div className="filterContainer">
        <p className="filterP">
          Filter by Region{" "}
          <span id="bidownarrow" onClick={handleRegion}>
            <BiDownArrow />
          </span>
        </p>
        <div className="regionsContainer" id="regionsContainer">
          <p onClick={() => handleFilterClick("Africa")} className="region">
            Africa
          </p>
          <p onClick={() => handleFilterClick("Americas")} className="region">
            Americas
          </p>
          <p onClick={() => handleFilterClick("Asia")} className="region">
            Asia
          </p>
          <p onClick={() => handleFilterClick("Europe")} className="region">
            Europe
          </p>
          <p onClick={() => handleFilterClick("Oceania")} className="region">
            Oceania
          </p>
        </div>
      </div>
    </div>
  );
}

export default Search;
