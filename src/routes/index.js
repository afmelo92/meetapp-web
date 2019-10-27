import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Edit from '../pages/Edit';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/details/:id" exact component={Details} isPrivate />
      <Route path="/edit" exact component={Edit} isPrivate />
      <Route path="/edit/:id" exact component={Edit} isPrivate />

      <Route path="/" component={() => <h1>404 PAGE NOT FOUND</h1>} />
    </Switch>
  );
}
