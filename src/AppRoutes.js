import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PrivateRoute } from './Components/Routes/PrivateRoute';
import { PublicRoute } from './Components/Routes/PublicRoute';
import { AppPrivateRoutes } from './Components/Routes/AppPrivateRoutes';
import { AppPublicRoutes } from './Components/Routes/AppPublicRoutes';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

export const AppRoutes = () => {
  // realizar llamado a Redux de autenticación creado en tkt OT94-106
  const user = useSelector(selectUser);

  //const user = { logged: true, role: 'administrador' };
  const userMock = { logged: user.authenticated, role: user.role };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PrivateRoute
            path='/backoffice'
            component={AppPrivateRoutes}
            isAuthenticated={userMock.logged}
            role={userMock.role}
          />
          <PublicRoute
            path='/'
            component={AppPublicRoutes}
            isAuthenticated={userMock.logged}
            role={userMock.role}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
