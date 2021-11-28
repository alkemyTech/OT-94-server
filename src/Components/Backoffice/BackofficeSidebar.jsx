import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
import './BackofficeSidebar.css';

export default function BackofficeSidebar() {



  const toggle = () => {
    document.getElementById("sidenav").classList.toggle("active-side");
    document.getElementById("wrapper").classList.toggle("active-wrapper");
  }

  return (
       <div className='sidenav' id="sidenav">

<a onClick={toggle} ><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-mobile-application-hamburger-menu-setting-interface-basic-color-tal-revivo.png"/></a>
<div id="wrapper">
  <Link to='/backoffice'>Backoffice</Link>
  <Link to='/backoffice/home'>Editar home</Link>
  <Link to='/backoffice/news/create'>Crear/editar novedad</Link>
  <Link to='/backoffice/news2'>Listado novedades</Link>
  <Link to='/backoffice/create-user'>Crear usuario</Link>
  <Link to='/backoffice/create-slide'>Crear slide</Link>
  <Link to='/backoffice/create-project'>Crear proyecto</Link>
  <Link to='/backoffice/members'>Ver miembros</Link>
  <Link to='/backoffice/members/edit'>Crear/Editar miembros</Link>
  <Link to='/backoffice/organization'>Datos de la organización</Link>
  <Link to='/backoffice/organization/edit'>
    Editar datos de la organización
  </Link>
  <Link to='/backoffice/users'>Usuarios</Link>
  <div className='sidenavLogout'>
    <LogoutButton />
  </div>
</div>
</div>
  );
}
