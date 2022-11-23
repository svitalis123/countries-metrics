import countryreducer from '../redux/countries/CountryReducer';

describe('test country reducer', () => {
  it('expect to show iniitial state', () => {
    expect(countryreducer(undefined, {})).toEqual([]);
  });
});
