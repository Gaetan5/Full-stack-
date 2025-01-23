import React from 'react';
import 'invitApps/frontend/styles/globals.css';

import type { AppProps } from 'next/app';

// Composant principal de l'application
const MyApp = ({ Component, pageProps }: AppProps) => {
  // Rendu du composant enfant avec ses propriétés
  return <Component {...pageProps} />;
};

export default MyApp;