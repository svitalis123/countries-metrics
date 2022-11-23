import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCHED = 'countries/country/fetchCountry';

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case 'countries/country/fetchCountry/fulfilled':
      return [action.payload];
    default:
      return state;
  }
};

export const fetchCountry = createAsyncThunk(FETCHED, async (region) => {
  const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  const datas = await response.json();
  const datasent = datas.map((rcountry) => ({
    population: rcountry.population,
    capital: rcountry.capital > 1 ? rcountry.capital[0] : rcountry.capital,
    area: rcountry.area,
    flag: rcountry.flags.svg,
  }));
  return datasent;
});

export default countryReducer;
