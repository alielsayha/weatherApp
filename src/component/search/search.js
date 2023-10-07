

import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handelChangeSearch = (e) => {
    setSearch(e);
    onSearchChange(e);
  };

  async function loadCity(inputCity) {
    try {
      const response = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputCity}`,
        geoApiOptions
      );
      const responseJson = await response.json();
      return {
        options: responseJson.data.map((City) => {
          return {
            value : `${City.latitude} ${City.longitude}`,
            label: `${City.city} , ${City.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={1000}
        value={search}
        onChange={(e) => handelChangeSearch(e)}
        loadOptions={(e)=>loadCity(e)}
      />
    </>
  );
};

export default Search;
