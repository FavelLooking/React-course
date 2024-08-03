import React from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../src/store/next-redux-wrapper';
import { ThemeProvider } from '../src/context/contextTheme';
import Head from 'next/head';

import '../styles/index.css';
import { ClickedProvider } from '../src/context/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../images/favicon.ico" />
      </Head>
      <ThemeProvider>
        <ClickedProvider>
          <Component {...pageProps} />
        </ClickedProvider>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
