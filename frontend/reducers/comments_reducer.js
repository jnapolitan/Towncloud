import {
    RECEIVE_SONG_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT,
    CLEAR_COMMENTS
} from '../actions/comment_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SONG_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {[action.comment.id]: action.comment});
        case REMOVE_COMMENT:
            let nextState = Object.assign({}, state);
            delete nextState[action.commentId];
            return nextState;
        case CLEAR_COMMENTS:
            return {};
        default:
            return state;
    }
}