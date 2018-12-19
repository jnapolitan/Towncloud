import { connect } from 'react-redux';
import { 
    togglePlayPause,
    seekSong
 } from '../../actions/playbar_actions';
import Playbar from './playbar';

const mapStateToProps = (state) => {
    const { 
        audioUrl,
        currentSong,
        songPlaying,
        currentTime, 
        isPlaying, 
        seekTime 
    } = state.ui.playbar;

    return {
        audioUrl: audioUrl,
        songPlaying: songPlaying,
        currentSong: currentSong,
        currentTime: currentTime,
        isPlaying: isPlaying,
        seekTime: seekTime
   };
};

const mapDispatchToProps = dispatch => ({
    togglePlayPause: () => dispatch(togglePlayPause()),
    seekSong: time => dispatch(seekSong(time)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playbar);