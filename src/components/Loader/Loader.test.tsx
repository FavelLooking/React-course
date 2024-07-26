import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  it('show image', () => {
    render(<Loader />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument;
  });
});
