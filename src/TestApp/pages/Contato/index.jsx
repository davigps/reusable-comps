import React from 'react';

import '../../global.css';
import logo from '../../assets/logo.png';

import { routes } from '../../config';

import Header from '../../../components/Header';

function Contato() {
  return (
    <div>
      <Header
        logo={logo}
        links={routes}
      />
      <div className="background-image" />
      <div style={{ height: '800px', textAlign: 'center', fontSize: '100px' }}>Contato</div>
    </div>
  );
}

export default Contato;
