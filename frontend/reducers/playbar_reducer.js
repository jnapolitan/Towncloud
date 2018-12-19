import { 
    TOGGLE_PLAY_SONG,
    SEEK_SONG
} from '../actions/playbar_actions';
import { RECEIVE_SONG } from '../actions/song_actions';

const defaultState = {
    currentSong: null,
    songPlaying: null,
    isPlaying: false,
    currentTime: 0,
    songDuration: null,
    seekTime: 0
};

export default (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SONG:
            return Object.assign(
                {}, 
                state, 
                {currentSong: action.song}
            );
        case TOGGLE_PLAY_SONG:
            if (action.song !== state.songPlaying) {
                return Object.assign(
                    {},
                    state,
                    {isPlaying: true, songPlaying: action.song}
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