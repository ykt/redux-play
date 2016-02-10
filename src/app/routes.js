import React from 'react';
import { Route } from 'react-router';

import App from './App';
import Home from './Home/Home';

const routes = (
  <Route component={ App }>
    <Route path="/" component={ Home }/>
    // put other routes here...
  </Route>
);

export default routes;
