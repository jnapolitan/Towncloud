import React from 'react';
import UserSongItemContainer from './user_song_item_container';

export default class UserShow extends React.Component {
    componentDidMount() {
        if (!this.props.user) {
            this.props.fetchUser(this.props.match.params.userId)
                .then(() => {
                    if (this.props.userSongs.length === 0) this.props.fetchAllSongs();
                });
        } 
    }

    render() {
        if (!this.props.user) return <div>Loading...</div>
        let userSongs;
        if (this.props.userSongs) {
            userSongs = this.props.userSongs.map(userSong => {
                return <UserSongItemContainer key={userSong.id} song={userSong} />
            });
        }
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
                <div className="user-songs">
                <h2 className="user-song-header">Songs</h2>
                    <ul className="user-song-list">
                        {userSongs}
                    </ul>
                </div>
            </div>
        )
        
    }
}