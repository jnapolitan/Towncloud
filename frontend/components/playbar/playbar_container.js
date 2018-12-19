import { connect } from 'react-redux';
import { 
    togglePlaySong,
    seekSong
 } from '../../actions/playbar_actions';
import { fetchAllSongs } from '../../actions/song_actions';
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
    togglePlaySong: () => dispatch(togglePlaySong()),
    seekSong: time => dispatch(seekSong(time)),
    fetchAllSongs: () => dispatch(fetchAllSongs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playbar);