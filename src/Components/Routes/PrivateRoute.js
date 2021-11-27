import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
//import { SideBar } from '../../components/SideBar/SideBar';

export const PrivateRoute = ({
  isAuthenticated,
  role,
  component: Component,
  ...rest
}) => {
  localStorage.setItem('lastPath', rest.location.pathname);

  return (
    <>
      {/*  <SideBar />  */}
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated && role.toLowerCase() === 'administrador' ? (
            <Component {...props} />
          ) : (
            <Redirect to='/' />
          )
        }
      />
    </>
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};
