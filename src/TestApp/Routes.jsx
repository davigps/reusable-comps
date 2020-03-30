import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Contato from './pages/Contato';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}
