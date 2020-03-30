import React from 'react';
import PropTypes from 'prop-types';

import logo from './assets/logo.png';

import { routes } from './config';

import './global.css';

import Header from '../components/Header';

function App({ children }) {
  return (
    <>
      <Header
        logo={logo}
        links={routes}
        actionButton={{ name: 'Contato', to: '/contato' }}
      />
      {children}
    </>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
