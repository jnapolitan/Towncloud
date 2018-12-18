import React from 'react';

export default class Playbar extends React.Component {
    constructor(props) {
        super(props);

        const { 
            songShowing, 
            currentSong, 
            currentTime, 
            isPlaying, 
            seekTime 
        } = this.props;

        this.state = {
            songShowing: songShowing,
            currentSong: currentSong,
            currentTime: currentTime,
            isPlaying: isPlaying,
            seekTime: seekTime
        };

        // this.calculateLength = this.calculateLength.bind(this)
    }

    componentDidMount() {
        this.song = document.getElementById('playbar-audio');
    }

    togglePlay() {
        const playButton = document.getElementById('play');
        if (this.props.isPlaying) {
            this.song.pause();
            this.props.togglePlaySong(this.props.isPlaying);
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            this.song.play();
            this.props.togglePlaySong(this.props.isPlaying);
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        }
    }

    calculateLength(length) {
        const minutes = Math.floor(length / 60),
            seconds_int = length - minutes * 60,
            seconds_str = seconds_int.toString(),
            seconds = seconds_str.substr(0, 2),
            time = minutes + ':' + seconds;

        return time;
    }

    render() {
        return (
            <div className="playbar-container">
                <div className="playbar-contents">
                    <audio id="playbar-audio">
                        {/* <source src="https://s3-us-west-1.amazonaws.com/towndcloud-seed/3.mp3" type="audio/mp3" /> */}
                    </audio>
                    <button id="play" onClick={() => this.togglePlay()} type="button"><i className="fas fa-play"></i></button>
                </div>
            </div>
        )
    }
}