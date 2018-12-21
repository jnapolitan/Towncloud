import React from 'react';
import { Link } from 'react-router-dom';

const UserSearchItem = props => (
  <button onClick={() => props.clearQuery()}>
    <Link to={`/users/${props.user.id}`}>
      <li className="search-item">
        <img className="search-img" src={props.user.avatarUrl} />
        <p className="search-result-text">{props.user.username}</p>
      </li>
    </Link>
  </button>
);

export default UserSearchItem;
