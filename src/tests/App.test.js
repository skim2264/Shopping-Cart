import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders correct heading title', () => {
  render(<App />);
  const linkElement = screen.getAllByRole("heading");
  expect(linkElement[0].textContent).toMatch(/Earth's Pantry Grocery/i);
});
