import { connect } from 'react-redux';
import { 
    togglePlayPause,
    seekSong,
    receiveCurrentTime
 } from '../../actions/playbar_actions';
import Playbar from './playbar';

const mapStateToProps = (state) => {
    const { 
        currentSong,
        songPlaying,
        currentTime, 
        isPlaying, 
        seekTime 
    } = state.ui.playbar;

    return {
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
    receiveCurrentTime: currentTime => dispatch(receiveCurrentTime(currentTime))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playbar);