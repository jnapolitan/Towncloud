import React from 'react';
// import ReactPlayer from 'react-player';

export default class Playbar extends React.Component {
    constructor(props) {
        super(props);

        const { 
            currentSong, 
            currentTime, 
            songDuration,
            isPlaying,
            seekTime 
        } = this.props;

        this.state = {
            currentSong: currentSong,
            currentTime: currentTime,
            songDuration: songDuration,
            isPlaying: isPlaying,
            seekTime: seekTime
        };

        this.setCurrentTimeInterval = this.setCurrentTimeInterval.bind(this);
    }

    componentDidMount() {
        this.audio = document.getElementById("playbar-audio");
    }

   componentDidUpdate() {
       const playButton = document.getElementById("play-button");
       playButton.innerHTML = this.buttonClass();
       this.setCurrentTimeInterval();

   } 

    buttonClass() {
        if (this.props.isPlaying) {
            return '<i class="fas fa-pause"></i>';
        } else {
            return '<i class="fas fa-play"></i>';
        }
    }

    setCurrentTimeInterval() {
        if (this.props.isPlaying) {
            clearInterval(this.currentTimeInterval);
            this.currentTimeInterval = setInterval(() => this.props.receiveCurrentTime(this.audio.currentTime), 1000);
        } else {
            clearInterval(this.currentTimeInterval);
        }
    }

    songDetails() {
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
        if (!this.props.currentSong) {
           return;
        } else if (this.props.isPlaying) {
            this.audio.pause();
            this.props.togglePlayPause();
        } else {
            this.audio.play();
            this.props.togglePlayPause();
        }
    }

    calculateLength(length) {
        const minutes = Math.floor(length / 60),
          secondsInt = Math.floor(length - minutes * 60),
          secondsStr = secondsInt.toString(),
          seconds = secondsStr.substr(0, 2),
          time = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

        return time;
    }

    calculateCurrentTime() {
        const currentMinute = parseInt(this.props.currentTime / 60) % 60,
            currentSecondsLong = this.props.currentTime % 60,
            currentSeconds = currentSecondsLong.toFixed(),
            currentTime = currentMinute + ":" + (currentSeconds < 10 ? "0" + currentSeconds : currentSeconds);
         return currentTime;
    }

    renderSeekbar() {
        const audio = this.audio;
        if (!audio || !audio.duration) return
        const length = audio.duration
        const currentTimeValue = this.props.currentTime;

        // calculate length of song
        const totalLength = this.calculateLength(length)
        document.getElementById('end-time').innerHTML = totalLength;

        // calculate current time
        const currentTime = this.calculateCurrentTime(currentTimeValue);
        document.getElementById('current-time').innerHTML = currentTime;

        const progressbar = document.getElementById('seekbar');
        progressbar.value = (this.props.currentTime / audio.duration);
        progressbar.addEventListener('click', seek);

        // const { receiveCurrentTime } = this.props;
        function seek(e) {
            const percent = e.offsetX / this.offsetWidth;
            audio.currentTime = percent * audio.duration;
            progressbar.value = percent / 100;
        }
    }

    render() {
        return <div className="playbar-container">
            <div className="playbar-contents">
              <audio id="playbar-audio">
                <source src={this.props.audioUrl} type="audio/mp3" />
              </audio>
              <div className="playbar-buttons">
                <button className="playbar-button">
                  <i className="fa fa-step-backward" />
                </button>
                <button id="play-button" className="playbar-button" onClick={() => this.togglePlay()} type="button">
                  <i className="fas fa-play" />
                </button>
                <button className="playbar-button">
                  <i className="fa fa-step-forward" />
                </button>
              </div>

              <div className="playbar-progress">
                <p id="current-time" />
                <progress value="0" max="1" className="seekbar" id="seekbar" />
                <p id="end-time" />
              </div>

              {this.songDetails()}
              {this.renderSeekbar()}
            </div>
          </div>;
    }
}