import { 
    RECEIVE_CURRENT_SONG,
    TOGGLE_PLAY_SONG,
    SEEK_SONG
} from '../actions/playbar_actions';

const defaultState = {
    currentSong: null,
    isPlaying: false,
    currentTime: 0,
    songDuration: null,
    seekTime: 0
};

export default (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_SONG:
            return Object.assign(
                {}, 
                state, 
                {currentSong: action.song, isPlaying: true}
            );
        case TOGGLE_PLAY_SONG:
            if (action.songId !== state.songId) {
                return Object.assign(
                    {},
                    state,
                    {isPlaying: true}
                );
            } else {
                return Object.assign(
                    {}, 
                    state, 
                    {isPlaying: !state.isPlaying}
                );
            };
        case SEEK_SONG:
            return Object.assign({}, state, {seekTime: action.seconds});
        default:
            return state;
    }
}