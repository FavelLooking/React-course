import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
  it('show not found page', () => {
    render(<NotFoundPage />);
    const notFound = screen.getByText('Lost in space?');
    expect(notFound).toBeInTheDocument;
  });
});
