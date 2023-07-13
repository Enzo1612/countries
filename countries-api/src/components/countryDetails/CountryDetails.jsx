import React from "react";
import "./CountryDetails.css";

function CountryDetails({ country }) {
  console.log(country.name.nativeName);

  const currencyNames = country.currencies
    ? Object.entries(country.currencies).map(
        ([code, currency]) => currency.name
      )
    : [];
  const languageNames = country.languages
    ? Object.values(country.languages)
    : [];

  return (
    <div className="singleCountryDetailsContainer">
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className="countryDetailsImage"
      />
      <div className="countryDetailsTextContainer">
        <div className="countryTop">
          <div className="countryLeft">
            <h2 id="singleCountryName">{country.name.common}</h2>
            <p className="singleCountryDetailsP">
              <span className="singleCountryDefaultText">Native Name: </span>
              {country.name.common}
            </p>
            <p className="singleCountryDetailsP">
              <span className="singleCountryDefaultText">Population: </span>
              {country.population}
            </p>
            <p className="singleCountryDetailsP">
              <span className="singleCountryDefaultText">Region: </span>
              {country.region}
            </p>
            <p className="singleCountryDetailsP">
              <span className="singleCountryDefaultText">Sub Region: </span>
              {country.subregion}
            </p>
            <p className="singleCountryDetailsP">
              <span className="singleCountryDefaultText">Capital: </span>
              {country.capital}
            </p>
          </div>
          <div className="countryRight">
            <p className="singleCountryDetailsP">
              <span className="singleCountryDefaultText">
                Top Level Domain:
              </span>
              {` ` + country.tld}
            </p>
            <p className="singleCountryDetailsP">
              <span className="singleCountryDefaultText">Currencies: </span>
              {currencyNames.join(", ")}
            </p>
            <p className="singleCountryDetailsP">
              <span className="singleCountryDefaultText">Languages: </span>
              {languageNames.join(", ")}
            </p>
          </div>
        </div>
        <div className="countryBottom">
          <div className="countryBorderContainer">
            <span className="singleCountryDefaultText">Border Countries: </span>
            {country.borders == null ? (
              <p>no borders</p>
            ) : (
              country.borders.map((border) => (
                <div className="countryBorder" key={border}>
                  {border}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
