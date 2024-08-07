import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';
import { describe, expect, it } from 'vitest';
import React from 'react';

describe('Loader', () => {
  it('show image', () => {
    render(<Loader />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument;
  });
});
