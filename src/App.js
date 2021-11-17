import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import ActivitiesList from './Components/Activities/ActivitiesList';
import ActivitiesDetail from './Components/Activities/Detail/ActivitiesDetail';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import NewsList from './Components/News/NewsList';
import NewsDetail from './Components/News/Detail/NewsDetail';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import MembersList from './Components/Members/MembersList';
import ProjectsForm from './Components/Projects/ProjectsForm';
import UsersFormCreateEdit from './Components/Users/UsersFormCreateEdit';
import ProjectsFormCreateEdit from "./Components/Projects/ProjectsFormCreateEdit";
import Organization from "./Components/Organization/Organization";

import ContactPage from './Components/Contact/ContactPage';
import Home from './Components/home';
import AboutPage from './Components/About/AboutPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />           
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/actividades/:id" component={ActivitiesDetail} />
          <Route path="/actividades" component={ActivitiesList} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/backoffice/news" component={NewsForm} />
          <Route path="/novedades/:id" component={NewsDetail} />
          <Route path="/novedades" component={NewsList} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />-
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/backoffice/members" component={MembersList}/>
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/contacto" component={ContactPage} />
          <Route path="/nosotros" component={AboutPage} />
          <Route path="/backoffice/create-user" component={UsersFormCreateEdit} />
          <Route path="/backoffice/create-project" component={ProjectsFormCreateEdit}/>
          <Route path="/backoffice/organization" component={Organization} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
