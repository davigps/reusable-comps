import React from 'react';

import '../../global.css';

import MyHeader from '../../../components/MyHeader';

function Home() {
  return (
    <div>
      <MyHeader />
      <div className="background-image" />
      <div style={{ height: '800px' }} />
    </div>
  );
}

export default Home;
