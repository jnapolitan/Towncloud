import React from 'react';
import SongSearchItem from './song_search_item';
import UserSearchItem from './user_search_item';

export default class SearchResults extends React.Component {

    renderUsers() {
        if (this.props.users.length > 0) {
            const users = this.props.users.map(user => {
                return <UserSearchItem 
                    key={user.id} 
                    user={user} 
                    clearQuery={this.props.clearQuery}
                />;
            });

            return <div className="search-section">
                <h4 className="search-header">Artists</h4>
                <ul>{users}</ul>
              </div>;
        }
    }

    renderSongs() {
        if (this.props.songs.length > 0) {
            const songs = this.props.songs.map(song => {
                return <SongSearchItem 
                    key={song.id} 
                    song={song} 
                    clearQuery={this.props.clearQuery}
                    />;
            });

            return <div className="search-section">
                <h4 className="search-header">Songs</h4>
                <ul>{songs}</ul>
              </div>;
        }
    }

    render() {

        return(
            <div>
                {this.renderUsers()}
                {this.renderSongs()}
            </div>
        )
    }
}