import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../../actions/session';


const mapStateToProps = state => ({
  errors: state.errors.session.responseJSON,
  formType: 'Sign in'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  demoLogin: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);