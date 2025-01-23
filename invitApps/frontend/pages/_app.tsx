import React from 'react';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

// Composant principal de l'application
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;