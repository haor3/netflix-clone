import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as ROUTES from 'constants/routes';
import { ProtectedRoute } from 'routes';
import { Home, Signin, Signup } from 'pages';
import { FaqsContainer } from 'containers';
import { AppContext } from 'context/app';
import { useAuthListener } from 'hooks';

export default function App() {
  const { user } = useAuthListener();

  return (
    <AppContext.Provider>
      <Switch>
        <Route exact path={ROUTES.SIGN_IN} component={Signin} />
        <Route exact path={ROUTES.SIGN_UP} component={Signup} />

        <ProtectedRoute user={user}>
          <Route exact path={ROUTES.BROWSE} component={Home} />
          <Route exact path="/faq" component={FaqsContainer} />
        </ProtectedRoute>
      </Switch>
    </AppContext.Provider>
  );
}
