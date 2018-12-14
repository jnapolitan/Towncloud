import { 
    RECEIVE_ALL_SONGS,
    RECEIVE_SONG,
    REMOVE_SONG
} from '../actions/song_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs;
        case RECEIVE_SONG:
            return Object.assign({}, state, {[action.song.id]: action.song});
        case REMOVE_SONG:
            let nextState = Object.assign({}, state);
            delete nextState[action.songId];
            return nextState;
        default:
            return state;
    }
}