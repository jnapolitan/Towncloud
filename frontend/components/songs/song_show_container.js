import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong, deleteSong } from '../../actions/song_actions';
import { fetchAllUsers } from '../../actions/session';

const mapStateToProps = (state, ownProps) => {

return {
    song: state.entities.songs[ownProps.match.params.songId],
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    errors: state.errors.song.status
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchSong: id => dispatch(fetchSong(id)),
    deleteSong: id => dispatch(deleteSong(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongShow);
