import React from "react";
import { Link } from "react-router-dom";

const UserIndexItem = props => {
    const { user } = props;

    return <div className="comp-item artist-item">
        <Link to={`/users/${user.id}`}>
          <img src={user.avatarUrl} className="song-user-avatar" />
        </Link>
        <Link to={`/users/${user.id}`}>
            <h4 className="artist-item-name">{user.username}</h4>
        </Link>
      </div>;
}

export default UserIndexItem;