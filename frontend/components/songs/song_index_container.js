import { connect } from 'react-redux';
import SongIndex from './song_index';
import { fetchAllSongs } from '../../actions/song_actions';
import { fetchAllUsers } from '../../actions/session';

const mapStateToProps = state => ({
    songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
});

const mapDispatchToProps = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongIndex);

