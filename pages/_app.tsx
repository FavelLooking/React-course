import React from 'react';
import { wrapper } from '../src/store/next-redux-wrapper';
import { ThemeProvider } from '../src/context/contextTheme';
import Head from 'next/head';
import { Provider } from 'react-redux';
import '../styles/index.css';
import { ClickedProvider } from '../src/context/context';

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../images/favicon.ico" />
      </Head>
      <Provider store={store}>
        <ThemeProvider>
          <ClickedProvider>
            <Component {...props.pageProps} />
          </ClickedProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
