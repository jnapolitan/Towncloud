import { connect } from 'react-redux';
import { togglePlayPause, receivePlayerSong } from '../../actions/playbar_actions';
import UserSongItem from './user_song_item';

const mapStateToProps = state => ({
    currentSong: state.ui.playbar.currentSong,
    isPlaying: state.ui.playbar.isPlaying
});

const mapDispatchToProps = dispatch => ({
    togglePlayPause: () => dispatch(togglePlayPause()),
    receivePlayerSong: song => dispatch(receivePlayerSong(song))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSongItem);