import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import More from '../More';
import store from '../redux/configureStore';

describe('More Componet', () => {
  it('test more component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <More />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
