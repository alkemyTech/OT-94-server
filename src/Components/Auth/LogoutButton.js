import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../../features/user/userSlice';
import '../../Components/FormStyles.css';

const LogoutButton = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      {user.authenticated ? (
        <button className='submit-btn button--logout' onClick={() => dispatch(logout())}>
          Salir
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default LogoutButton;
