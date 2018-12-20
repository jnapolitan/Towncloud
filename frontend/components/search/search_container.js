import { connect } from 'react-redux';
import Search from './search';
import { fetchAllUsers } from '../../actions/session';
import { fetchAllSongs } from '../../actions/song_actions';

const mapStateToProps = state => ({
    users: Object.keys(state.entities.users).map(id => state.entities.users[id]),
    songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
});

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllSongs: () => dispatch(fetchAllSongs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);