import { connect } from 'react-redux';
import { togglePlaySong, receivePlayerSong } from '../../actions/playbar_actions';
import Playbar from './playbar';

const mapStateToProps = (state) => {
    const { currentSong, isPlaying } = state.ui.playbar;

    return {
        currentSong: currentSong,
        isPlaying: isPlaying,
   };
};

const mapDispatchToProps = dispatch => ({
    togglePlaySong: () => dispatch(togglePlaySong()),
    receivePlayerSong: song => dispatch(receivePlayerSong(song))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playbar);