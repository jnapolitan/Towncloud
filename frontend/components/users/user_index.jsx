import React from 'react';
import UserIndexItem from './user_index_item';

export default class UserIndex extends React.Component {
    componentDidMount() {
        if (this.props.users.length < 2) this.props.fetchAllUsers();
    }

    render () {
        const users = this.props.users.map(user => {
            return <UserIndexItem key={user.id} user={user} />
        });

        return <div className="comp-index-container">
        <h3>Trending now</h3>
        <p className="muted-text">Check out some of the newest artists on TownCloud</p>
            <ul className="comp-items-container">{users}</ul>
          </div>;
    }
}