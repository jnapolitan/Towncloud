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
            currentSong: currentSong,
            currentTime: currentTime,
            isPlaying: isPlaying,
            seekTime: seekTime
        };

        // this.calculateLength = this.calculateLength.bind(this)
    }

   componentDidUpdate(prevProps) {
       const playButton = document.getElementById("play-button");
       playButton.innerHTML = this.buttonClass();
   } 

    buttonClass() {
        if (this.props.isPlaying) {
            return '<i class="fas fa-pause"></i>';
        } else {
            return '<i class="fas fa-play"></i>';
        }
    }

    songdetails() {
        const { currentSong } = this.props;
        if (currentSong) {
         return (
             <div className="playbar-song-details">
                <img src={currentSong.imageUrl} />
                <div className="playbar-song-text">
                    <p className="song-title">{currentSong.title}</p>
                    <p>{currentSong.genre}</p>
                 </div>
             </div>
         )
        } else {
            return
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
                    <div className="playbar-buttons">
                        <button className="playbar-button"><i className="fa fa-step-backward"></i></button>
                        <button id="play-button" className="playbar-button" onClick={() => this.togglePlay()} type="button"><i className="fas fa-play"></i></button>
                        <button className="playbar-button"><i className="fa fa-step-forward"></i></button>
                    </div>
                    {this.songdetails()}
                </div>
            </div>
        )
    }
}