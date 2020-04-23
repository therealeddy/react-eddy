import React from 'react';
import { Switch } from 'react-router-dom';

import { SignIn } from '~/pages';

import Route from './Routes';

export default function Routes() {
  return (
    <Switch>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" component={SignIn} isPrivate />
      </Switch>
    </Switch>
  );
}
