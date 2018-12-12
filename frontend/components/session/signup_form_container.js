import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createUser, clearErrors } from '../../actions/session';


const mapStateToProps = state => ({
  errors: state.errors.session.responseJSON,
  formType: 'Create account'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(createUser(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);