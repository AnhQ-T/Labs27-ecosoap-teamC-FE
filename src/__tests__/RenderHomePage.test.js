import RenderHomePage from '../components/pages/Home/RenderHomePage';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../state/index';

describe('<RenderHomePage /> test suite', () => {
  test('it handles a loading state', () => {
    const authService = {
      logout: jest.fn(),
    };
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <RenderHomePage
            userInfo={{ name: 'Sara' }}
            authService={authService}
          />
        </Router>
      </Provider>
    );
    const button = getByText(/logout/i);
    userEvent.click(button);
    expect(authService.logout).toHaveBeenCalledTimes(1);
    // expect(getByText(/hi sara welcome to labs basic spa/i).innerHTML).toBe(
    //   'Hi Sara Welcome to Labs Basic SPA'
    // );
  });
});
