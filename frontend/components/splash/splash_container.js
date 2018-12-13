import { connect } from 'react-redux';
import Splash from './splash';
import { clearErrors } from '../../actions/session';

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);