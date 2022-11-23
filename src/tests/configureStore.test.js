import store from '../redux/configureStore';

it('render the store initial state', () => {
  expect(store.getState()).toEqual([]);
});
