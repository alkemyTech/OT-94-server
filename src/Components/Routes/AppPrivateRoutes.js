import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ScreenDashboard from "../Backoffice/ScreenDashboard";
import HomeFormEdit from "../home/HomeFormEdit";
import NewsForm from "../News/NewsForm";
import UsersFormCreateEdit from '../Users/UsersFormCreateEdit';
import SlidesForm from '../Slides/SlidesForm';
import ProjectsFormCreateEdit from "../Projects/ProjectsFormCreateEdit";
import MembersList from "../Members/MembersList";
import MemberFormCreateEdit from "../Members/MemberFormCreateEdit";
import Organization from "../Organization/Organization";
import OrganizationForm from "../Organization/OrganizationForm";
import NewsList from "../News/NewsList";
import NewsList2 from "../News/NewsList2";
import UsersList from "../Users/UsersList";
import SlidesTable from "../Slides/Table/SlidesTable";

export const AppPrivateRoutes = () => {
  return (
      <Switch>
          
          <Route path="/backoffice" exact component={ScreenDashboard}/>
          <Route path="/backoffice/home" exact component={HomeFormEdit} />
          <Route path="/backoffice/news/create" exact component={NewsForm} />
          <Route path="/backoffice/news/edit" component={NewsForm} />          
          <Route path="/backoffice/news" component={NewsList} />
          <Route path="/backoffice/news2" component={NewsList2} />
          <Route path="/backoffice/create-user" exact component={UsersFormCreateEdit}/>
          <Route path="/backoffice/create-slide" exact component={SlidesForm} />
          <Route path="/backoffice/create-project" exact component={ProjectsFormCreateEdit}/>
          <Route path="/backoffice/members" exact component={MembersList}/>
          <Route path="/backoffice/members/edit" exact component={MemberFormCreateEdit}/>
          <Route path="/backoffice/organization" exact component={Organization} />
          <Route path="/backoffice/organization/edit" exact component={OrganizationForm}/>                                                                
          <Route path="/backoffice/users" component={UsersList} />                                        
          <Route path="/backoffice/slides" component={SlidesTable} />
         <Redirect to="/" />
    </Switch>
  );
};
