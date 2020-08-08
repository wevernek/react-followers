import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Followers from './pages/followers';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/followers/:login" component={Followers} />
    </Switch>
  </BrowserRouter>
);

export default Routes;