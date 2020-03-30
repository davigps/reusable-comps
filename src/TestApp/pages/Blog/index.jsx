import React from 'react';

import '../../global.css';

import MyHeader from '../../../components/MyHeader';

function Blog() {
  return (
    <div>
      <MyHeader />
      <div className="background-image" />
      <div style={{ height: '800px', textAlign: 'center' }}>BLOG</div>
    </div>
  );
}

export default Blog;
