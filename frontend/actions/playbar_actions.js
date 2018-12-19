export const RECEIVE_PLAYER_SONG = 'RECEIVE_PLAYER_SONG';
export const TOGGLE_PLAY_PAUSE = 'TOGGLE_PLAY_PAUSE';
export const SEEK_SONG = 'SEEK_SONG';

export const receivePlayerSong = song => ({
    type: RECEIVE_PLAYER_SONG,
    song
});

export const togglePlayPause = () => ({
    type: TOGGLE_PLAY_PAUSE
});

export const seekSong = time => ({
    type: SEEK_SONG,
    time
});

