import React from 'react';

const SongIndexItem = props => {
    const userActions = () => {
        return <div>
            <button onClick={() => deleteSong(song.id)}>Delete</button>
            <a href={`/#/songs/${song.id}/edit`}>Edit song</a>
          </div>;
    }
    const { song, deleteSong } = props;

    return <div className="song-item">
        <img className="song-img" src={song.imageUrl} />
        <p>{song.title}</p>
        <p>{song.genre}</p>
        <button onClick={() => deleteSong(song.id)}>Delete</button>
        <a href={`/#/songs/${song.id}/edit`}>Edit song</a>
      </div>;
};

export default SongIndexItem;