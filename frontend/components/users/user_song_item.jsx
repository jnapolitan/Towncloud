import React from 'react';

const UserSongItem = props => (
    <li>
        <h1>{props.song.title}</h1>
        <p>{props.song.description}</p>
    </li>
)

export default UserSongItem;