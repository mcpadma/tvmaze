import React from "react";
import { Switch, Route } from "react-router-dom";

import ShowsList from '../components/ShowsList';
import EpisodesList from '../components/EpisodesList';

import App from '../App';

const AppRoutes = () => {
  return(
  <Switch>
  <Route path="/" exact component={ShowsList}/>
  <Route path="/episodes/:id" exact component={EpisodesList}/>
  </Switch>
  )
  
}

export default AppRoutes;