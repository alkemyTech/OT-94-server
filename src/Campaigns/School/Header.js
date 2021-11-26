import React from 'react';
import './SchoolCampaign.css'

const Header = () => {
  return (
    <div className="header">
      <img className="campaign-logo" src="/images/school campaign/logo.png" alt="school campaign logo" />
      <h1 className="slogan">¡Juntos en la vuelta al cole!</h1>
      <img className="logo-ONG" src="/images/assets/LOGO-SOMOS-MAS.png" alt="Logo somos más" />
    </div>
  );
}

export default Header;