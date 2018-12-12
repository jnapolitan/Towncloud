import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createUser } from '../../actions/session';


const mapStateToProps = state => ({
  errors: state.errors.session.responseJSON,
  formType: 'Create account'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(createUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);