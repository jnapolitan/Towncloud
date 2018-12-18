import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong, deleteSong } from '../../actions/song_actions';
import { fetchAllUsers } from '../../actions/session';
import { receiveCurrentSong, togglePlaySong } from '../../actions/playbar_actions'

const mapStateToProps = (state, ownProps) => {

return {
    song: state.entities.songs[ownProps.match.params.songId],
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    errors: state.errors.song.status,
    currentSong: state.ui.playbar.currentSong,
    isPlaying: state.ui.playbar.isPlaying
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchSong: id => dispatch(fetchSong(id)),
    deleteSong: id => dispatch(deleteSong(id)),
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    togglePlaySong: () => dispatch(togglePlaySong())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongShow);
