import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from 'App/pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
