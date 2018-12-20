export const RECEIVE_PLAYER_SONG = 'RECEIVE_PLAYER_SONG';
export const TOGGLE_PLAY_PAUSE = 'TOGGLE_PLAY_PAUSE';
export const RECEIVE_CURRENT_TIME = 'RECEIVE_CURRENT_TIME';
export const RECEIVE_SEEK_TIME = 'RECEIVE_SEEK_TIME';

export const receivePlayerSong = song => ({
    type: RECEIVE_PLAYER_SONG,
    song
});

export const togglePlayPause = () => ({
    type: TOGGLE_PLAY_PAUSE
});

export const receiveSeekTime = time => ({
    type: RECEIVE_SEEK_TIME,
    time
});

export const receiveCurrentTime = currentTime => ({
    type: RECEIVE_CURRENT_TIME,
    currentTime
});

