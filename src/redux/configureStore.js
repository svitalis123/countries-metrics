import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries/CountryReducer';

const store = configureStore({
  reducer: countryReducer,
});

export default store;
