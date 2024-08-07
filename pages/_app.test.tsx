import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MyApp from './_app';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

vi.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const mockReducer = createSlice({
  name: 'mock',
  initialState: {},
  reducers: {},
}).reducer;

vi.mock('../src/store/next-redux-wrapper', () => ({
  wrapper: {
    useWrappedStore: () => ({
      store: configureStore({
        reducer: {
          mock: mockReducer,
        },
      }),
      props: { pageProps: {} },
    }),
  },
}));

describe('MyApp', () => {
  it('renders without crashing', () => {
    render(<MyApp Component={() => <div>Test Component</div>} {...{}} />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  it('renders Providers correctly', () => {
    render(<MyApp Component={() => <div>Test Component</div>} {...{}} />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  it('includes the favicon link in the head', () => {
    render(<MyApp Component={() => <div>Test Component</div>} {...{}} />);

    const faviconLink = document.querySelector('link[rel="shortcut icon"]');
    expect(faviconLink).toBeInTheDocument();
    expect(faviconLink).toHaveAttribute('href', '../images/favicon.ico');
  });
});
