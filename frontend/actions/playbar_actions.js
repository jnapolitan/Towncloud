export const RECEIVE_PLAYER_SONG = 'RECEIVE_PLAYER_SONG';
export const TOGGLE_PLAY_SONG = 'TOGGLE_PLAY_SONG';

export const receivePlayerSong = song => ({
    type: RECEIVE_PLAYER_SONG,
    song
});

export const togglePlaySong = () => ({
    type: TOGGLE_PLAY_SONG
});

