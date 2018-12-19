import React from 'react';

export default class Playbar extends React.Component {
    constructor(props) {
        super(props);

        const { 
            currentSong, 
            currentTime, 
            isPlaying, 
            seekTime 
        } = this.props;

        this.state = {
            audioUrl: '',
            currentSong: currentSong,
            currentTime: currentTime,
            isPlaying: isPlaying,
            seekTime: seekTime
        };

        // this.calculateLength = this.calculateLength.bind(this)
    }

   componentDidUpdate(prevProps) {
       const playButton = document.getElementById("playbar-button");
       playButton.innerHTML = this.buttonClass();
   } 

    buttonClass() {
        if (this.props.isPlaying) {
            return '<i class="fas fa-pause"></i>';
        } else {
            return '<i class="fas fa-play"></i>';
        }
    }

    togglePlay() {
        const audio = document.getElementById('playbar-audio');
        if (!this.props.currentSong) {
           return;
        } else if (this.props.isPlaying) {
            audio.pause();
            this.props.togglePlayPause();
        } else {
            audio.play();
            this.props.togglePlayPause();
        }
    }

    render() {
        return (
            <div className="playbar-container">
                <div className="playbar-contents">
                    <audio id="playbar-audio">
                        <source src={this.props.audioUrl} type="audio/mp3" />
                    </audio>
                    <button id="playbar-button" onClick={() => this.togglePlay()} type="button"><i className="fas fa-play"></i></button>
                </div>
            </div>
        )
    }
}