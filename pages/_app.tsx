import React from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../src/store/next-redux-wrapper';
import { ThemeProvider } from '../src/context/contextTheme';

import '../styles/index.css';
import { ClickedProvider } from '../src/context/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ClickedProvider>
        <Component {...pageProps} />
      </ClickedProvider>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
