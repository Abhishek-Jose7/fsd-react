import { render, screen } from '@testing-library/react';
import App from './App';

test('renders storefront heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/featured collection/i);
  expect(headingElement).toBeInTheDocument();
});
