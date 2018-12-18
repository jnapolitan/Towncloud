import React from 'react';

export default class Playbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            duration: 0,
            isPlaying: false,
            currentSong: this.props.currentSong,
            playingSong: null
        };
    }

    componentDidMount() {
        this.song = document.getElementById('playbar-audio');
        this.props.fetchSong(this.props.match.params.songId);
    }

    togglePlay() {
        const playButton = document.getElementById('play');
        if (this.state.isPlaying) {
            this.song.pause();
            this.setState({isPlaying: false});
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            this.song.play();
            this.setState({isPlaying: true});
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        }
    }

    render() {
        return (
            <div className="playbar-container">
                <div className="playbar-contents">
                    <audio id="playbar-audio">
                        <source src="https://s3-us-west-1.amazonaws.com/towndcloud-seed/3.mp3" type="audio/mpeg" />
                        Your browser does not support audio elements.
                    </audio>
                    <button id="play" onClick={() => this.togglePlay()} type="button"><i class="fas fa-play"></i></button>
                </div>
            </div>
        )
    }
}