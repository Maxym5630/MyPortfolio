import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contact me heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /contact me/i });
  expect(heading).toBeInTheDocument();
});
