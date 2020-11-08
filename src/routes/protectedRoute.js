import React from 'react';
import { Redirect } from 'react-router-dom';

export default function ProtectedRoute({ children, user }) {
  if (!user) {
    return <Redirect to="/signin" />;
  }

  return <>{children}</>;
}
