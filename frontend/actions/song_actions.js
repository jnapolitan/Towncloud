import * as SongAPIUtil from '../util/song_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';
export const CLEAR_SONG_ERRORS = 'CLEAR_SONG_ERRORS';

const receiveAllSongs = (songs) => ({
    type: RECEIVE_ALL_SONGS,
    songs
});

const receiveSong = (song) => ({
    type: RECEIVE_SONG,
    song
});

const removeSong = (songId) => ({
    type: REMOVE_SONG,
    songId
});

const receiveSongErrors = (err) => ({
    type: RECEIVE_SONG_ERRORS,
    err
});

export const clearSongErrors = () => ({
    type: CLEAR_SONG_ERRORS
});

export const fetchAllSongs = () => dispatch => SongAPIUtil.fetchAllSongs()
    .then(songs => dispatch(receiveAllSongs(songs)), err => dispatch(receiveSongErrors(err)));

export const fetchSong = (id) => dispatch => SongAPIUtil.fetchSong(id)
    .then(song => dispatch(receiveSong(song)), err => dispatch(receiveSongErrors(err)));

export const createSong = (song) => dispatch => SongAPIUtil.createSong(song)
    .then(song => dispatch(receiveSong(song)), err => dispatch(receiveSongErrors(err)));

export const updateSong = (song) => dispatch => SongAPIUtil.updateSong(song)
    .then(song => dispatch(receiveSong(song)), err => dispatch(receiveSongErrors(err)));

export const deleteSong = (id) => dispatch => SongAPIUtil.deleteSong(id)
    .then(song => dispatch(removeSong(id)), err => dispatch(receiveSongErrors(err)));