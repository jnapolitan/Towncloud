import * as CommentAPIUtil from '../util/comment_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

const receiveCommentErrors = err => ({
    type: RECEIVE_COMMENT_ERRORS,
    err
});

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
});

export const createComment = comment => dispatch => CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment()), err => dispatch(receiveCommentErrors(err)));

export const deleteComment = commentId => dispatch => CommentAPIUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(commentId)), err => dispatch(receiveCommentErrors(err)));