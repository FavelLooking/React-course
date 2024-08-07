import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Loading from './loading';
import React from 'react';

vi.mock('../components/Loader/Loader', () => ({
  Loader: () => <div>Loader Component</div>,
}));

describe('Loading Component', () => {
  it('renders Loader component', () => {
    render(<Loading />);

    expect(screen.getByText('Loader Component')).toBeInTheDocument();
  });
});
