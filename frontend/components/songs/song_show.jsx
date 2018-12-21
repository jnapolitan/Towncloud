import React from 'react';
import { Link } from "react-router-dom";
import AdBanner from '../ads/ad_banner';
import CommentIndexContainer from '../comments/comment_index_container';

export default class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song_id: this.props.match.params.songId,
            body: ''
        };
        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    componentDidMount() {
        const { users, song } = this.props;
        if (Object.keys(users).length < 3) this.props.fetchAllUsers();
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

    buttonClass() {
        const { isPlaying, song, currentSong } = this.props;
        if (isPlaying && song === currentSong) {
            return "pause-button-img"
        } else {
            return "play-button-img"
        }
    }

    handlePlayPause(e) {
        e.preventDefault();
        this.props.receivePlayerSong(this.props.song)
    }

    handleCommentSubmit(e) {
        e.preventDefault();
        if (this.state.body !== '') {
            this.props.createComment(this.state, this.props.match.params.songId)
                .then(() => this.setState({ body: "" }));
        }   
    }

    updateCommentInput() {
        return e => {
            this.setState({body: e.target.value})
        }
    }

    render() {
        const { song, users } = this.props;
        if (!song || Object.keys(users).length < 2) {
            return <div className="comp-show-container">Loading...</div>;
        }

        return <div className="comp-show-container">
        <div className="song-show-contents">
            <div className="song-show-left">
                <form onSubmit={this.handlePlayPause} className="play-pause-button">
                    <input type="submit" id="play" className={this.buttonClass()} value="" />
                </form>
                <div>
                    <h3><span className="song-show-text">{song.title}</span></h3>
                    <Link to={`/users/${song.userId}`}>
                        <p><span className="song-show-text">{users[song.userId].username}</span></p>
                    </Link>
                </div>
            </div>
            <div className="waveform-img" />
            <img className="song-show-img" src={song.imageUrl} />
          </div>
          <div className="song-show-body">
            <div className="song-show-details">
                <form className="comment-bar" onSubmit={this.handleCommentSubmit}>
                    <img className="comment-img" src="https://leveldanceproject.com/wp-content/uploads/2017/07/BlankProfilePic.png" />
                    <input 
                        type="text" 
                        placeholder="Write a comment" 
                        onChange={this.updateCommentInput()} 
                        value={this.state.body} 
                    />
                </form>
                {this.userActions()}
                <div className="song-details">
                    <div className="song-user">
                        <Link to={`/users/${song.userId}`}>
                            <img src={users[song.userId].avatarUrl} className="song-user-avatar" />
                        </Link>
                        <Link to={`/users/${song.userId}`}>
                            <p className="song-user-text">{users[song.userId].username}</p>
                        </Link>        
                    </div>
                    <div>
                        <p className="song-desc">{song.description}</p>
                        <CommentIndexContainer songId={this.props.match.params.songId} />
                    </div>
                </div>
                
            </div>
            <div className="ad-banner-parent">
                <AdBanner />
            </div>
          </div>
        </div>;
    }
}