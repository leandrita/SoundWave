import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
})

test('renders Feel the music title', () => {
  const title = screen.getByText(/feel the music/i);
  expect(title).toBeInTheDocument();
});

test('renders logo paragraph: Soundwave', () => {
  const paragraph = screen.getByText(/soundwave/i);
  expect(paragraph).toBeInTheDocument();
});

test('renders join now button', () => {
  const joinNowBtn = screen.getByText(/Join Now/i);
  expect(joinNowBtn).toBeInTheDocument();
});
