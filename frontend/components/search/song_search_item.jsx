import React from 'react';
import { Link } from 'react-router-dom';

const SongSearchItem = props => (
  <button onClick={() => props.clearQuery()}>
    <Link to={`/songs/${props.song.id}`}>
      <li className="search-item">
        <img className="search-img" src={props.song.imageUrl} />
        <p className="search-result-text">{props.song.title}</p>
      </li>
    </Link>
  </button>
);

export default SongSearchItem