import React from 'react';
import { Route } from 'react-router';

import {reducer} from './reducer';


import App from './components/App';
import Home from './Home/Home';



const routes = (
  <Route component={ App }>
    <Route path="/" component={ GridTag } />
  </Route>
);

export default routes;
