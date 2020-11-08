import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as ROUTES from 'constants/routes';
import { Home } from 'pages';

export default function App() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
    </Switch>
  );
}
