import React from 'react';

export default class Playbar extends React.Component {
    constructor(props) {
        super(props);

        const { 
            songPlaying, 
            currentSong, 
            currentTime, 
            isPlaying, 
            seekTime 
        } = this.props;

        this.state = {
            songPlaying: songPlaying,
            currentSong: currentSong,
            currentTime: currentTime,
            isPlaying: isPlaying,
            seekTime: seekTime
        };

        // this.calculateLength = this.calculateLength.bind(this)
    }

    componentDidUpdate() {
        this.song = document.getElementById('playbar-audio');
    }

    buttonClass() {
        if (this.props.isPlaying) {
            return '<i class="fas fa-play"></i>';
        } else {
            return '<i class="fas fa-pause"></i>';
        }
    }

    togglePlay() {
        const playButton = document.getElementById('playbar-button');
        if (this.props.isPlaying) {
            this.song.pause();
            this.props.togglePlaySong(this.props.isPlaying);
            playButton.innerHTML = this.buttonClass();
        } else {
            this.song.play();
            this.props.togglePlaySong(this.props.isPlaying);
            playButton.innerHTML = this.buttonClass();
        }
    }

    render() {
        if (!this.props.currentSong) return <div>Loading...</div>
        return (
            <div className="playbar-container">
                <div className="playbar-contents">
                    <audio id="playbar-audio">
                        <source src={this.props.currentSong.audioUrl} type="audio/mp3" />
                    </audio>
                    <button id="playbar-button" onClick={() => this.togglePlay()} type="button"><i className="fas fa-play"></i></button>
                </div>
            </div>
        )
    }
}