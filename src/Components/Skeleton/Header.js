import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = ({ menu }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const menuMap = menu.map((element, index) => {
    return (
      <NavLink
        key={index}
        to={element.path}
        activeStyle={{ color: 'black' }}
        exact
        className='NavLink '
      >
        {element.title}
      </NavLink>
    );
  });
  return (
    <>
      <nav className={sidebar ? 'Nav active' : 'Nav'}>
        <FaBars className='Bars' onClick={showSidebar} />
        <div className={sidebar ? 'NavMenu active' : 'NavMenu'}>{menuMap}</div>
        <nav className={sidebar ? 'NavBtn active' : 'NavBtn'}>
          <NavLink className='NavBtnLink' to='/login'>
            Ingresar
          </NavLink>
        </nav>
      </nav>
    </>
  );
};

export default Header;
