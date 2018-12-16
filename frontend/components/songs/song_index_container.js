import { connect } from 'react-redux';
import SongIndex from './song_index';
import { fetchAllSongs } from '../../actions/song_actions';

const mapStateToProps = state => {
    return {songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])};
};

const mapDispatchToProps = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongIndex);

