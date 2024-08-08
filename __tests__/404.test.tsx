import { render, screen } from '@testing-library/react';
import { NotFoundPage } from '../pages/404';
import { describe, expect, it } from 'vitest';
import React from 'react';

describe('NotFoundPage', () => {
  it('show not found page', () => {
    render(<NotFoundPage />);
    const notFound = screen.getByText('Lost in space?');
    expect(notFound).toBeInTheDocument;
  });
});
