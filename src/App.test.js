import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import store from './store';

test('renders storefront heading', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

  const headingElement = screen.getByText(/northline store/i);
  expect(headingElement).toBeInTheDocument();
});
