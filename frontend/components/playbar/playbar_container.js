import { connect } from 'react-redux';
import { 
    receiveCurrentSong,
    togglePlaySong,
    seekSong
 } from '../../actions/playbar_actions';
import Playbar from './playbar';

const mapStateToProps = (state) => {
    const { 
        currentSong, 
        currentTime, 
        isPlaying, 
        seekTime 
    } = state.ui.playbar;

    return {
    songShowing: state.entities.songs,
    currentSong: currentSong,
    currentTime: currentTime,
    isPlaying: isPlaying,
    seekTime: seekTime
   };
};

const mapDispatchToProps = dispatch => ({
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    togglePlaySong: () => dispatch(togglePlaySong()),
    seekSong: time => dispatch(seekSong(time)),
    fetchSong: id => dispatch(fetchSong(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playbar);