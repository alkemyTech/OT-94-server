import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../../features/user/userSlice';
import './User.css';

const LogoutButton = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      {user.authenticated ? (
        <button className='logoutButton' onClick={() => dispatch(logout())}>
          Salir
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default LogoutButton;
