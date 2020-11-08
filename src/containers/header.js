import React from 'react';

import { AppRoutes } from 'routes';
import { Header } from 'components';

import logo from '../logo.svg';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={AppRoutes.home} src={logo} alt="Netflix" />
        <Header.ButtonLink to={AppRoutes.signin}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
