import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = props => {
    const { song } = props;

    return <div className="song-item">
        <Link to={`/songs/${song.id}`}>
          <img className="song-img" src={song.imageUrl} />
        </Link>
        <Link to={`/songs/${song.id}`}>
          <h4>{song.title}</h4>
        </Link>
        <p className="song-item-genre">{song.genre}</p>
      </div>;
};

export default SongIndexItem;