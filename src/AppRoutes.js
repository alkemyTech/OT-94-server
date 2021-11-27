import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PrivateRoute } from './Components/Routes/PrivateRoute';
import { PublicRoute } from './Components/Routes/PublicRoute';
import { AppPrivateRoutes } from './Components/Routes/AppPrivateRoutes';
import { AppPublicRoutes } from './Components/Routes/AppPublicRoutes';

export const AppRoutes = () => {
  // realizar llamado a Redux de autenticación creado en tkt OT94-106
  const user = { logged: false, role: 'administrador' };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PrivateRoute
            path='/backoffice'
            component={AppPrivateRoutes}
            isAuthenticated={user.logged}
            role={user.role}
          />
          <PublicRoute
            path='/'
            component={AppPublicRoutes}
            isAuthenticated={user.logged}
            role={user.role}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
