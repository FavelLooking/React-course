import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

export const ChildComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary component', () => {
  it('renders error message when a child component throws an error', () => {
    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>,
    );

    const errorMessage = screen.getByText(
      'The universe is not favoring you today.',
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders children when no error is thrown', () => {
    render(
      <ErrorBoundary>
        <p>No error here!</p>
      </ErrorBoundary>,
    );

    const childText = screen.getByText('No error here!');
    expect(childText).toBeInTheDocument();
  });
});
