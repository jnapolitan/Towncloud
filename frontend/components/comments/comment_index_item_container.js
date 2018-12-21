import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { commentUserSelector } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    commentUser: commentUserSelector(ownProps.comment, state)
});

export default connect(
    mapStateToProps
)(CommentIndexItem)