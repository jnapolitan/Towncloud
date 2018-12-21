import React from 'react';
import { Link } from 'react-router-dom';

export default class UserSongItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    buttonClass() {
        const { isPlaying, song, currentSong } = this.props;
        if (isPlaying && song === currentSong) {
            return "pause-button-img";
        } else {
            return "play-button-img";
        }
    }

    handleClick(e) {
        const { receivePlayerSong, song } = this.props;
        e.preventDefault();
        receivePlayerSong(song);
    }


    render() {
        const { song } = this.props;
        return <li className="user-song-item">
            <form onSubmit={this.handleClick} className="play-pause-button">
              <input type="submit" id="play" className={this.buttonClass()} value="" />
            </form>
            <div className="user-song-deails">
              <Link to={`/songs/${song.id}`}>
                <h3 className="user-song-title">{song.title}</h3>
              </Link>
              <p>{song.genre}</p>
            </div>
          </li>;
    }
}

