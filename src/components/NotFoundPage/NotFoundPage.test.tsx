import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
import '@testing-library/jest-dom';

describe('NotFoundPage Component', () => {
  it('renders heading and paragraph text correctly', () => {
    render(<NotFoundPage />);

    const headingElement = screen.getByRole('heading', {
      name: /Lost in space?/i,
    });
    const paragraphElement = screen.getByText(
      /No problem, just navigate back to the homepage or explore the stars from our menu./i,
    );

    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });

  it('renders with correct CSS class', () => {
    render(<NotFoundPage />);

    const notFoundPageElement = screen.getByTestId('not-found-page');

    expect(notFoundPageElement).toHaveClass('not-found-page');
  });
});
