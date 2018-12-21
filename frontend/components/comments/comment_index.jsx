import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

export default class CommentIndex extends React.Component {

    componentDidMount() {
        if (this.props.comments.length === 0) this.props.fetchSongComments(this.props.songId);
    }

    componentWillUnmount() {
        this.props.clearComments();
    }
    

    render() {
        let comments;
        if (this.props.comments) {
            comments = this.props.comments.map(comment => {
                return <CommentIndexItemContainer
                    key={comment.id} 
                    comment={comment} 
                    deleteComment={this.props.deleteComment}
                    />
            });
        }
        return (
            <>
            
            <ul className="comment-index">
                <h4>Latest comments:</h4>
                { comments.reverse() }
            </ul>
            </>
        )
        
    }
    
}