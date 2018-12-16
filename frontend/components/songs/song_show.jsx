import React from 'react';
import { Link } from "react-router-dom";

export default class SongShow extends React.Component {

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId);
    }

    render() {
        const { song } = this.props;
        if (!song) {
            return <div className="song-show-container">Loading...</div>;
        }

        return (
            <div className="song-show-container">
                <h3>{song.title}</h3>
                <p>{song.description}</p>
                <Link to="/songs">Back to all songs</Link>
            </div>
        );
    }
}