import React from "react";

import { Route, Switch } from "react-router-dom";
import CreateSong from './components/Songs/CreateNewSong';
import SongsList from './components/Songs/SongsList';
import SongEdit from './components/Songs/SongEdit';
import SongDelete from "./components/Songs/SongDelete";
import SongDetails from "./components/Songs/SongDetailes";

const Routes = (
  <Switch>
    <Route path="/" exact component={SongsList} />
    <Route path="/CreateSong" component={CreateSong}  />
    <Route path="/songs/edit/:id" component={SongEdit} />
    <Route path="/songs/delete/:id" component={SongDelete} />
    <Route path="/songs/:id" component={SongDetails} />
  </Switch>
);

export default Routes;