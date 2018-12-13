import { 
    RECEIVE_SONG_ERRORS,
    RECEIVE_SONG,
    CLEAR_SONG_ERRORS,
} from '../actions/songs';

export default (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SONG_ERRORS:
            return action.err;
        case RECEIVE_SONG:
            return [];
        case CLEAR_SONG_ERRORS:
            return [];
        default:
            return state;
    }
};