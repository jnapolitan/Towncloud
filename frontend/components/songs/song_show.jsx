import React from 'react';
import { Link } from "react-router-dom";

export default class SongShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props
          .fetchSong(this.props.match.params.songId)
            .then(this.props.receiveCurrentSong(this.props.match.params.songId));
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
        // const playButton = document.getElementById('play');
        if (this.props.isPlaying) {
            this.audio.pause();
            this.props.togglePlaySong(this.props.isPlaying);
        } else {
            this.audio.play();
            this.props.togglePlaySong(this.props.isPlaying);
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
                <button 
                    id="play" 
                    className="play-button-img"
                    onClick={() => this.togglePlay()}
                >Play/Pause</button>
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
            <audio id="audio">
                <source src={song.audioUrl} type="audio/mp3" />
            </audio>
        </div>;
    }
}