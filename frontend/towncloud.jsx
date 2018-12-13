import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/store'
import * as SongAction from './actions/songs'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING 

    window.store = store.getState();
    window.dispatch = store.dispatch;
    window.fetchAllSongs = SongAction.fetchAllSongs;
    window.fetchSong = SongAction.fetchSong;
    window.createSong = SongAction.createSong;
    window.updateSong = SongAction.updateSong;
    window.deleteSong = SongAction.deleteSong;

    //

    ReactDOM.render(<App store={store} />, root)
});