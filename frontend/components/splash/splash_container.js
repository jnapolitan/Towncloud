import { connect } from 'react-redux';
import Splash from './splash';
import { clearSessionErrors } from '../../actions/session';

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);