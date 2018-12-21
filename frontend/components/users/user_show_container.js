import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/session';
import { fetchAllSongs } from '../../actions/song_actions';
import { userSongsSelector } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId];
    return {
        user: user,
        userSongs: userSongsSelector(user, state)
    };  
};

const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    fetchAllSongs: () => dispatch(fetchAllSongs())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);