import React from 'react';

export default class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { commentUser, comment } = this.props;
        return (
            <li className="comment-index-item">
                <img src={commentUser.avatarUrl} className="comment-user-img" />
                <p>{comment.body}</p>
            </li>
        )
        
    }
}
