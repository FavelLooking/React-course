'use client';

import React from 'react';
import { wrapper } from '../src/store/next-redux-wrapper';
import { ThemeProvider } from '../src/context/contextTheme';
import { Provider } from 'react-redux';
import '../styles/index.css';
import { ClickedProvider } from '../src/context/context';
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { store } = wrapper.useWrappedStore();

  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="../images/favicon.ico" />
      </Head>
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <ClickedProvider>{children}</ClickedProvider>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
