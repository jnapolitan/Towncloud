import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong, deleteSong } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
return {
    song: state.entities.songs[ownProps.match.params.songId]
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
