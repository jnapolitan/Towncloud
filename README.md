# README

Welcome to the readme for [TownCloud](http://towncloud.herokuapp.com), a community for music creators inspired by SoundCloud. Read on to learn more about the approach, the technologies used, and a couple highlighted features.

## Overview

[TownCloud](http://towncloud.herokuapp.com) is web app that allows users to share and discover music. Users can sign up, upload their songs, browse songs and artists, play songs continuously while navigating the site, and comment on songs.

## Technologies

[TownCloud](http://towncloud.herokuapp.com) is a full stack app built with Ruby on Rails and JavaScript. React was used as a frontend library in conjunction with Redux as the frontend framework. No additional libraries or pre-built elements were used. All componenets such as the sign in modal, music player, and search bar were built from scratch.

## Highlighted Features

### Global music playbar

![global playbar](https://github.com/jnapolitan/Towncloud/blob/master/app/assets/images/global-playbar.gif "Global Playbar")

#### The goal: 

Add the ability for users to play songs continuously while browsing the site. Allow globally synced play/pause functionality from the playbar, the song's page, and on other pages where the song appears.

#### The solution: 

Have a UI slice of state as part of the global Redux state that keeps track of the necessary data that needs to be synced across the app. Pass the relevant parts of that slice of state and relevant actions to other components (such as the song show page) to allow for globally synced playback and control.

```json
ui:
  playbar:
    currentSong: null
    currentTime: 0
    isPlaying: false
    seekTime: 0
    songDuration: 0

```

### Search

![global search](https://github.com/jnapolitan/Towncloud/blob/master/app/assets/images/global-search.gif "Global Search")

#### The goal:

Add the ability for users to search for artists and songs as their browsing the site.

#### The solution:

Add a search bar in the global nav that utilizes regex to search through different slices of the Redux global state. Categorize results by artists and songs, which lead to their corresponding views, to satisfy whichever path is more relevant to the user.

```javascript
updateResults() {
        const { users, songs } = this.props;
        if (!users || !songs) return;

        const regex = this.state.query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        const regexQuery = new RegExp(regex, 'gi');

        if (this.state.query.length < 2) {
            this.setState({
                userResults: [],
                songResults: []
            });
        } else {
            if (this.searchResults) {
                this.searchResults.classList.remove('hidden');
            }

            let userResults = [];
            let songResults = [];

            users.forEach(user => {
                if (user.username.match(regexQuery)) {
                    userResults.push(user);
                }
            });

            songs.forEach(song => {
                if (song.title.match(regexQuery)) {
                    songResults.push(song);
                }
            });

            this.setState({
                userResults: userResults,
                songResults: songResults
            });
        }
    }
```
