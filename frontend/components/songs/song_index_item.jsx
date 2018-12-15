import React from 'react';

const SongIndexItem = props => {
    const { song, deleteSong } = props;

    return <div>
        <h2>{song.title}</h2>
        <h3>{song.genre}</h3>
        <p>{song.description}</p>
        <img className="preview" src={song.imageUrl} />
        <button onClick={() => deleteSong(song.id)}>Delete</button>
        <a href={`/#/songs/${song.id}/edit`}>Edit song</a>
        <hr />
      </div>;
};

export default SongIndexItem;