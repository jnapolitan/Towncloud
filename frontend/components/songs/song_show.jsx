import React from 'react';
import { Link } from "react-router-dom";

export default class SongShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { users, song } = this.props;
        if (Object.keys(users).length === 1) this.props.fetchAllUsers();
        if (!song) this.props.fetchSong(this.props.match.params.songId);
    }

    componentDidUpdate() {
        if (this.props.errors) {
            this.props.history.push('/songs');
        }
        this.audio = document.getElementById("audio");
    }

    userActions() {
        const { currentUser, song } = this.props;
        if (currentUser.id === song.userId) {
            return (
                <div className="song-options">
                    <Link to={`/songs/${song.id}/edit`}>
                        <button>Edit Song</button>
                    </Link>
                    <button
                        onClick={() => this.confirmDelete()}
                    >Delete Song</button>
                </div>
            )
        }
    }

    confirmDelete() {
        const { song } = this.props
        const response = confirm("Are you sure you want to delete this song?");
        if (response == true) {
            this.props.deleteSong(song.id)
                .then(() => this.props.history.push('/songs'));
            return true;
        }
        else {
            return false;
        }
    }

    togglePlay() {
        const { isPlaying, togglePlaySong, song } = this.props;
        const playButton = document.getElementById('play');
        if (isPlaying) {
            togglePlaySong(isPlaying, song);
            playButton.className = "play-button-img";
        } else {
            togglePlaySong(isPlaying, song);
            playButton.className = "pause-button-img";
        }
    }

    buttonClass() {
        const { isPlaying, song, currentSong } = this.props;
        if (isPlaying && song === currentSong) {
            return "pause-button-img"
        } else {
            return "play-button-img"
        }
    }

    render() {
        const { song, users } = this.props;
        if (!song || Object.keys(users).length === 1) {
            return <div className="song-show-container">Loading...</div>;
        }
        return <div className="song-show-container">
        <div className="song-show-contents">
            <div className="song-show-left">
            <form>
                <input type="submit" id="play" className={this.buttonClass()} value="" onClick={() => this.togglePlay()}/>
            </form>
            <div>
                <h3><span className="song-show-text">{song.title}</span></h3>
                <p><span className="song-show-text">{song.genre}</span></p>
            </div>
            </div>
            <div className="waveform-img" />
            <img className="song-show-img" src={song.imageUrl} />
          </div>
          <div className="song-show-details">
            
          <form className="comment-bar">
            <img className="comment-img" src="https://leveldanceproject.com/wp-content/uploads/2017/07/BlankProfilePic.png" />
            <input type="text" placeholder="Write a comment"/>
          </form>
          {this.userActions()}
          <div className="song-details">
            <div className="song-user">
                <div className="song-user-img" />
                <p>{users[song.userId].username}</p>
            </div>
            <p className="song-desc">{song.description}</p>
          </div>
            </div>
        </div>;
    }
}