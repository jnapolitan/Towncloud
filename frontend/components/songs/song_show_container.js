import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong, deleteSong } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
return {
    song: state.entities.songs[ownProps.match.params.songId],
    currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchSong: id => dispatch(fetchSong(id)),
    deleteSong: id => dispatch(deleteSong(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongShow);
