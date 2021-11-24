import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

// https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
const Header = ({ menu }) => {
	console.log(menu);
	const menuMap = menu.map((element) => {
		return (
			<Link to={element.link} activeStyle className="NavLink ">
				{element.menu}
			</Link>
		);
	});
	return (
		<>
			<nav className="Nav">
				<FaBars className="Bars" />
				<div className="NavMenu">{menuMap}</div>
			</nav>
		</>
	);
};

export default Header;
