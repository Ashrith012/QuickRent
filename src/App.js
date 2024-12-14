import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import GadgetListing from './components/GadgetListing';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <HeroBanner />
      <Features />
      <GadgetListing />
      <ContactForm />
    </ThemeProvider>
  );
};

export default App;
