import * as SessionAPIUtil from '../util/session_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (err) => ({
    type: RECEIVE_SESSION_ERRORS,
    err
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});

export const fetchAllUsers = () => dispatch => SessionAPIUtil.fetchAllUsers()
    .then(users => (dispatch(receiveAllUsers(users))));

export const fetchUser = (id) => dispatch => SessionAPIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)), err => dispatch(receiveErrors(err)) );

export const createUser = (user) => dispatch => SessionAPIUtil.createUser(user)
    .then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err)));

export const login = (user) => dispatch => SessionAPIUtil.createSession(user)
    .then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err)));
    
export const logout = () => dispatch => SessionAPIUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()), err => dispatch(receiveErrors(err)));