import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

