import React from 'react';
import UserIndexItem from './user_index_item';
import AdBanner from '../ads/ad_banner';

export default class UserIndex extends React.Component {
    componentDidMount() {
        if (this.props.users.length < 3) this.props.fetchAllUsers();
    }

    render () {
        const users = this.props.users.map(user => {
            return <UserIndexItem key={user.id} user={user} />
        });

        return <div className="comp-index-container">
        <h3>Trending now</h3>
        <p className="muted-text">Check out some of the newest artists on TownCloud</p>
            <div className="song-show-body">
                <ul className="comp-items-container">{users}</ul>
                <div className="ad-banner-parent">
                    <AdBanner />
                </div>
            </div>
          </div>;
    }
}