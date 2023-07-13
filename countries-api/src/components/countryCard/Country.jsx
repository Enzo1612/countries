import React from "react";
import "./Country.css";

function Country(props) {
  return (
    <div className="countryContainer">
      <img src={props.flag} alt={props.name} className="countryImage" />
      <div className="countryDetailsContainer">
        <h1 className="countryName">{props.name}</h1>
        <p className="countryDetails">
          <span className="countryDetailNames">population:</span>
          {props.population}
        </p>
        <p className="countryDetails">
          <span className="countryDetailNames">region:</span>
          {props.region}
        </p>
        <p className="countryDetails">
          <span className="countryDetailNames">capital:</span>
          {props.capital}
        </p>
      </div>
    </div>
  );
}

export default Country;
