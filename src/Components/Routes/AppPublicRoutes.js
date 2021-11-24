import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SchoolCampaign from '../../Campaigns/School/SchoolCampaign';
import ToysCampaign from '../../Campaigns/Toys/ToysCampaign';
import AboutPage from '../About/AboutPage';
import ActivitiesForm from '../Activities/ActivitiesForm';
import ActivitiesList from '../Activities/ActivitiesList';
import ActivitiesDetail from '../Activities/Detail/ActivitiesDetail';
import LoginForm from '../Auth/LoginForm';
import CategoriesForm from '../Categories/CategoriesForm';
import ContactPage from '../Contact/ContactPage';
import Donacion from '../Donations/Donacion';
import Gracias from '../Donations/Gracias';
import Home from '../home';
import MembersForm from '../Members/MembersForm';
import NewsDetail from '../News/Detail/NewsDetail';
import NewsList from '../News/NewsList';
import ProjectsForm from '../Projects/ProjectsForm';
import Header from '../Skeleton/Header';
import TestimonialForm from '../Testimonials/TestimonialsForm';
import UserForm from '../Users/UsersForm';

export const AppPublicRoutes = () => {
  const newsMock = [
    { id: 2, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
    { id: 1, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
    { id: 3, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
  ];

  const headerElements = [
    { title: 'Home', path: '/' },
    { title: 'Nosotros', path: '/nosotros' },
    { title: 'Contacto', path: '/contacto' },
    { title: 'Campaña Escolar', path: '/school-campaign' },
    { title: 'Campaña Toys', path: '/toys-campaign' },
  ];

  return (
    <>
      <Header menu={headerElements} />
      <p />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/donar' exact component={Donacion} />
        <Route path='/gracias' component={Gracias} />
        <Route path='/contacto' component={ContactPage} />
        <Route path='/nosotros' component={AboutPage} />
        <Route path='/create-user' exact component={UserForm} />
        <Route path='/school-campaign' exact component={SchoolCampaign} />
        <Route path='/toys-campaign' exact component={ToysCampaign} />
        <Route path='/create-member' exact component={MembersForm} />
        <Route path='/create-project' exact component={ProjectsForm} />
        <Route path='/create-activity' exact component={ActivitiesForm} />
        <Route path='/create-category' exact component={CategoriesForm} />
        <Route path='/create-testimonials' exact component={TestimonialForm} />-
        <Route path='/novedades' exact>
          <NewsList novedades={newsMock} />
        </Route>
        <Route path='/novedades/:id' component={NewsDetail} />
        <Route path='/actividades' exact component={ActivitiesList} />
        <Route path='/actividades/:id' component={ActivitiesDetail} />
        <Route path='/login' component={LoginForm} />
        <Redirect to='/backoffice' />
      </Switch>
    </>
  );
};
