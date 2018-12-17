import { connect } from 'react-redux';
import Splash from './splash';
import { clearSessionErrors } from '../../actions/session';
import { fetchAllSongs } from '../../actions/song_actions';

const mapStateToProps = state => ({
  songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
});

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  fetchAllSongs: () => dispatch(fetchAllSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);