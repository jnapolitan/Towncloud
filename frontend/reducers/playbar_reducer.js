import { TOGGLE_PLAY_SONG, RECEIVE_PLAYER_SONG } from '../actions/playbar_actions';

const defaultState = {
    currentSong: null,
    isPlaying: false,
};

export default (state = defaultState, action) => {
    Object.freeze(state);
    

    switch(action.type) {
        case RECEIVE_PLAYER_SONG:
            return { currentSong: action.song };
        case TOGGLE_PLAY_SONG:
            return { isPlaying: !state.isPlaying };
        default:
            return state;
    }
}