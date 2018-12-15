import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SplashContainer from "./splash/splash_container";
import NewSongFormContainer from './songs/new_song_form_container';
import EditSongFormContainer from './songs/edit_song_form_container';
import SongIndexContainer from './songs/song_index_container';
// import SongIndexItem from './songs/song_index_item';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, HashRouter, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

const App = ({ store }) => (
  <div className="container">
    <Provider store={store}>
      <HashRouter>
        <div>
          <Switch>
            <AuthRoute exact path="/splash" component={SplashContainer} />
            <ProtectedRoute path="/" component={NavbarContainer} />
            <Redirect to="/" />
          </Switch>
          <Switch>
            <ProtectedRoute path="/upload" component={NewSongFormContainer} />
            <ProtectedRoute exact path="/songs" component={SongIndexContainer} />
            {/* <ProtectedRoute path="songs/:songId" component={SongIndexItem} /> */}
            <ProtectedRoute path="/songs/:songId/edit" component={EditSongFormContainer} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  </div>
);

export default App;