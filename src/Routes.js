import React from "react";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import CreateSong from './components/Songs/CreateNewSong';
import SongsList from './components/Songs/SongsList';
import SongEdit from './components/Songs/SongEdit';
import SongDelete from "./components/Songs/SongDelete";
import SongDetails from "./components/Songs/SongDetailes";
import history from './history';

const Routes = (
  // BrowserHistory doesn't accept custom history so replaced with router
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={SongsList} />
      <Route path="/CreateSong" component={CreateSong} />
      <Route path="/songs/edit/:id" component={SongEdit} />
      <Route path="/songs/delete/:id" component={SongDelete} />
      <Route path="/songs/:id" component={SongDetails} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);

export default Routes;