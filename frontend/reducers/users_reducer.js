import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session';

export default (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user});
        default:
            return state;
    }
};