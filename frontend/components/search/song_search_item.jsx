import React from 'react';
import { Link } from 'react-router-dom';

const SongSearchItem = props => (
    <Link to={`/songs/${props.song.id}`}>
        <li className="search-item">
            <img className="search-img" src={props.song.imageUrl} />
            <p className="search-result-text">{props.song.title}</p>
        </li>
    </Link >
);

export default SongSearchItem