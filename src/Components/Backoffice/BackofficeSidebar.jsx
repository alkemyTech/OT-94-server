import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
import './BackofficeSidebar.css';

export default function BackofficeSidebar() {
  return (
    <div class='sidenav'>
      <Link to='/backoffice'>Backoffice</Link>
      <Link to='/backoffice/home'>Editar home</Link>
      <Link to='/backoffice/news/create'>Crear/editar novedad</Link>
      <Link to='/backoffice/news2'>Listado novedades</Link>
      <Link to='/backoffice/create-user'>Crear usuario</Link>
      <Link to='/backoffice/create-slide'>Crear slide</Link>
      <Link to='/backoffice/create-project'>Crear proyecto</Link>
      <Link to='/backoffice/members'>Ver miembros</Link>
      <Link to='/backoffice/members/edit'>Editar miembros</Link>
      <Link to='/backoffice/organization'>Datos de la organización</Link>
      <Link to='/backoffice/organization/edit'>
        Editar datos de la organización
      </Link>
      <Link to='/backoffice/users'>Usuarios</Link>
      <LogoutButton />
    </div>
  );
}
