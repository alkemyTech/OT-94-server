import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

// https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
const Header = ({ menu }) => {
  console.log(menu);
  const menuMap = menu.map((element) => {
    return (
      <NavLink
        to={element.link}
        activeStyle={{ color: 'black' }}
        exact
        className='NavLink '
      >
        {element.menu}
      </NavLink>
    );
  });
  return (
    <>
      <nav className='Nav'>
        <FaBars className='Bars' />
        <div className='NavMenu'>{menuMap}</div>
      </nav>
    </>
  );
};

export default Header;
