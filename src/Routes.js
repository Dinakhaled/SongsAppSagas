import React from "react";

import { Route, Switch } from "react-router-dom";
import CreateSong from './components/Songs/CreateNewSong';
import SongsList from './components/Songs/SongsList';

const Routes = (
  <Switch>
    <Route path="/CreateSong" component={CreateSong}  />
    <Route path="/" exact component={SongsList} />
  </Switch>
);

export default Routes;