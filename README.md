# README

Welcome to the readme for [TownCloud](http://towncloud.herokuapp.com), a community for music creators inspired by SoundCloud. Read on to learn more about the approach, the technologies used, and a couple highlighted features.

## Overview

[TownCloud](http://towncloud.herokuapp.com) is web app that allows users to share and discover music. Users can sign up, upload their songs, browse songs and artists, play songs continuously while navigating the site, and comment on songs.

## Technologies

[TownCloud](http://towncloud.herokuapp.com) is a full stack app built with Ruby on Rails and JavaScript. React was used as a frontend library in conjunction with Redux as the frontend framework. No additional libraries or pre-built elements were used. All componenets such as the sign in modal, music player, and search bar were built from scratch.

## Highlighted Features

### Global music playbar

#### The goal: 

Add the ability to begin song playback from a song's page and have that song continuously play while browsing the site. Allow globally synced play/pause functionality from the playbar, the song's page, and on other pages where the song appears.

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





Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
