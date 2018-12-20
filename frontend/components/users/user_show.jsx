import React from 'react';

export default class UserShow extends React.Component {
    componentDidMount() {
        if (!this.props.user) this.props.fetchUser(this.props.match.params.userId);
    }

    render() {
        if (!this.props.user) return <div>Loading...</div>
        return (
            <div className="comp-show-container">
                <div className="song-show-contents">
                    <div className="song-show-left">
                        <img src={this.props.user.avatarUrl} className="user-show-avatar"/>
                        <div>
                            <h3><span className="song-show-text">{this.props.user.username}</span></h3>
                            <p><span className="song-show-text">{this.props.user.location}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}