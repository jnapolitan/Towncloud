import React from 'react';
import CommentIndexItem from './comment_index_item';

export default class CommentIndex extends React.Component {

    componentDidMount() {
        if (this.props.comments.length === 0) this.props.fetchSongComments(this.props.songId);
    }

    render() {
        let comments;
        if (this.props.comments) {
            comments = this.props.comments.map(comment => {
                return <CommentIndexItem key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />
            });
        }
        return (
            <ul>
                { comments }
            </ul>
        )
        
    }
    
}