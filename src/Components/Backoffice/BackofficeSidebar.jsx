import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
import './BackofficeSidebar.css';
import {GiHamburgerMenu} from "react-icons/gi"
export default function BackofficeSidebar() {
  
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='sidenav'>
      <div className="container--icon-hamburger">
        <GiHamburgerMenu onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)} className="icon-hamburger" />
      </div>
      <div className={showMenu ? "container--show-menu" : "no--show "}>
        <div className="container--backoffice-links">
          <Link className="backoffice-links-menu" to='/backoffice'>Backoffice</Link>
          <Link className="backoffice-links-menu" to='/backoffice/home'>Editar home</Link>
          <Link className="backoffice-links-menu" to='/backoffice/news/create'>Crear/editar novedad</Link>
          <Link className="backoffice-links-menu" to='/backoffice/news2'>Listado novedades</Link>
          <Link className="backoffice-links-menu" to='/backoffice/create-slide'>Crear slide</Link>
          <Link className="backoffice-links-menu" to='/backoffice/create-project'>Crear proyecto</Link>
          <Link className="backoffice-links-menu" to='/backoffice/members'>Ver miembros</Link>
          <Link className="backoffice-links-menu" to='/backoffice/members/edit'>Crear/Editar miembros</Link>
          <Link className="backoffice-links-menu" to='/backoffice/organization'>Datos de la organización</Link>
          <Link className="backoffice-links-menu" to='/backoffice/organization/edit'>
            Editar datos de la organización
          </Link>
          <Link className="backoffice-links-menu" to='/backoffice/users'>Usuarios</Link>
          <Link className="backoffice-links-menu" to='/backoffice/create-user'>Crear usuario</Link>
          <div className='container--logout'>
            <LogoutButton />
          </div>
        </div>
        
      </div>
    </div>
  );
}
