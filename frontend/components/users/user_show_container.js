import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/session';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);