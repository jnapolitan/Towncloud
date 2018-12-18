export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const TOGGLE_PLAY_SONG = 'TOGGLE_PLAY_SONG';
export const SEEK_SONG = 'SEEK_SONG';

export const receiveCurrentSong = song => ({
    type: RECEIVE_CURRENT_SONG,
    song
});

export const togglePlaySong = playing => ({
    type: TOGGLE_PLAY_SONG,
    playing
});

export const seekSong = time => ({
    type: SEEK_SONG,
    time
});

