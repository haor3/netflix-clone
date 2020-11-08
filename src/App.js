import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppRoutes, ProtectedRoute } from 'routes';
import { Home, Signin, Signup, Browse } from 'pages';
import { FaqsContainer } from 'containers';
import { AppContext } from 'context/app';
import { useAuthListener } from 'hooks';

export default function App() {
  const { user } = useAuthListener();

  return (
    <AppContext.Provider>
      <Switch>
        <Route exact path={AppRoutes.signin} component={Signin} />
        <Route exact path={AppRoutes.signup} component={Signup} />

        <ProtectedRoute user={user}>
          <Route exact path={AppRoutes.home} component={Home} />
          <Route exact path={AppRoutes.browse} component={Browse} />
          <Route exact path="/faq" component={FaqsContainer} />
        </ProtectedRoute>
      </Switch>
    </AppContext.Provider>
  );
}
