import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { JumbotronContainer, FooterContainer, FaqsContainer } from 'containers';

export default function App() {
  return (
    <>
      <Route exact path="/" component={JumbotronContainer} />
      <Route exact path="/" component={FooterContainer} />
      <Switch>
        <Route exact path="/faq" component={FaqsContainer} />
      </Switch>
    </>
  );
}
