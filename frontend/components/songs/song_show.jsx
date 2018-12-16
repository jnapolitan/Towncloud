import React from 'react';
import { Link } from "react-router-dom";

export default class SongShow extends React.Component {

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId);
    }

    userActions() {
        const { currentUser, song } = this.props
        if (currentUser.id === song.userId) {
            return (
                <div className="song-options">
                    <Link to={`/songs/${song.id}/edit`}>
                        <button>Edit Song</button>
                    </Link>
                    <button
                        className="warn"
                        onClick={() => this.props.deleteSong(song.id)}
                    >Delete Song</button>
                </div>
            )
        }
    }

    render() {
        const { song } = this.props;
        if (!song) {
            return <div className="song-show-container">Loading...</div>;
        }

        return <div className="song-show-container">
        <div className="song-show-contents">
            <div className="song-show-left">
                <img className="play-button-img" src="https://www.seoclerk.com/pics/446033-13uMBM1476730969.png" />
                <div>
                    <h3><span className="song-show-text">{song.title}</span></h3>
                    <p><span className="song-show-text">{song.genre}</span></p>
                </div>
            </div>
            <div className="waveform-img" />
            <img className="song-show-img" src={song.imageUrl} />
          </div>
          {this.userActions()}
        </div>;
    }
}