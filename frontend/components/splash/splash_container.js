import { connect } from 'react-redux';
import Splash from './splash';
import { login, createUser } from '../../actions/session';

const mapStateToProps = state => ({
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(createUser(user))
}); 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);