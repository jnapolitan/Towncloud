import { connect } from 'react-redux';
import { 
    togglePlayPause,
    receiveSeekTime,
    receiveCurrentTime
 } from '../../actions/playbar_actions';
import Playbar from './playbar';

const mapStateToProps = (state) => {
    const { 
        currentSong,
        songPlaying,
        currentTime,
        songDuration,
        isPlaying, 
        seekTime 
    } = state.ui.playbar;

    return {
        songPlaying: songPlaying,
        currentSong: currentSong,
        currentTime: currentTime,
        songDuration: songDuration,
        isPlaying: isPlaying,
        seekTime: seekTime
   };
};

const mapDispatchToProps = dispatch => ({
    togglePlayPause: () => dispatch(togglePlayPause()),
    receiveSeekTime: time => dispatch(receiveSeekTime(time)),
    receiveCurrentTime: currentTime => dispatch(receiveCurrentTime(currentTime))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playbar);