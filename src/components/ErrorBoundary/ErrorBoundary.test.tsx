import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ErrorBoundary } from './ErrorBoundary';

const ErrorComponent = () => {
  throw new Error('Test error');
};

const SafeComponent = () => <p>Safe Component</p>;

describe('ErrorBoundary Component', () => {
  it('renders children correctly when no error occurs', () => {
    render(
      <ErrorBoundary>
        <SafeComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Safe Component')).toBeInTheDocument();
  });

  it('renders error message when an error is thrown', () => {
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    expect(
      screen.getByText('The universe is not favoring you today.'),
    ).toBeInTheDocument();
  });
});
