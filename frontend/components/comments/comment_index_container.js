import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchSongComments, deleteComment, clearComments } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/session';

const mapStateToProps = (state) => ({
    comments: Object.keys(state.entities.comments).map(id => state.entities.comments[id])
});

const mapDispatchToProps = dispatch => ({
    fetchSongComments: songId => dispatch(fetchSongComments(songId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    clearComments: () => dispatch(clearComments())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentIndex);