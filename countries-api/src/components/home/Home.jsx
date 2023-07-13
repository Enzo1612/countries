import { React, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import Search from "../search/Search";
import Country from "../countryCard/Country";
import CountryDetails from "../countryDetails/CountryDetails";
import { BsArrowBarLeft } from "react-icons/bs";

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filterRegion, setFilterRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    const results = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleFilter = (region) => {
    setFilterRegion(region);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    document.getElementById("homeSearchContainer").style.display = "none";
  };

  const resetCountrySelection = () => {
    setSelectedCountry(null);
    document.getElementById("homeSearchContainer").style.display = "flex";
  };

  const filteredCountries = searchQuery
    ? searchResults
    : filterRegion
    ? countries.filter((country) => country.region === filterRegion)
    : countries;

  return (
    <div>
      <div className="homeNavbarContainer" onClick={resetCountrySelection}>
        <Navbar />
      </div>
      <div id="homeSearchContainer">
        <Search onSearch={handleSearch} onFilter={handleFilter} />
      </div>
      <div className="countriesContainer" id="countriesContainer">
        {selectedCountry ? (
          <div className="singleCountryContainer">
            <p onClick={resetCountrySelection} id="backButton">
              <span id="bsarrowbarleft">
                <BsArrowBarLeft />
              </span>
              Back
            </p>
            <CountryDetails country={selectedCountry} />
          </div>
        ) : (
          filteredCountries.map((country) => (
            <div onClick={() => handleCountryClick(country)} key={country.cca3}>
              <Country
                name={country.name.common}
                population={country.population}
                capital={country.capital}
                region={country.region}
                flag={country.flags.png}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
