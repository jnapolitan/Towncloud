import { connect } from 'react-redux';
import UserIndex from './user_index';
import { fetchAllUsers } from '../../actions/session';

const mapStateToProps = state => ({
    users: Object.keys(state.entities.users).map(id => state.entities.users[id])
});

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserIndex);