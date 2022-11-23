import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import store from '../redux/configureStore';

describe('test home', () => {
  it('test home component', () => {
    const testmore = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(testmore).toMatchSnapshot();
  });
});
