import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions';
import Playbar from './playbar';

const mapStateToProps = (state, ownProps) => ({
    currentSong: state.entities.songs[ownProps.match.params.songId]
});

const mapDispatchToProps = dispatch => ({
    fetchSong: id => dispatch(fetchSong(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playbar);