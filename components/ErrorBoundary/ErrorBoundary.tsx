import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  errorMessage: string;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error) {
    return { errorMessage: error.toString() };
  }

  render() {
    if (this.state.errorMessage) {
      return <p className="error">The universe is not favoring you today.</p>;
    }
    return this.props.children;
  }
}
