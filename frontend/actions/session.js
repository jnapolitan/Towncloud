import * as SessionAPIUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const createUser = (user) => dispatch => SessionAPIUtil.createUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(errors => dispatch(receiveErrors(errors)));

export const login = (user) => dispatch => SessionAPIUtil.createSession(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(errors => dispatch(receiveErrors(errors)));

export const logout = () => dispatch => SessionAPIUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
    .catch(errors => dispatch(receiveErrors(errors)));