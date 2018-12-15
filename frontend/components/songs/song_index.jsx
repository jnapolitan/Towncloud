import React from 'react';
import SongIndexItem from './song_index_item';

export default class SongIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllSongs();
    }

    render() {
        console.log(this.props.songs)
        if (!this.props.songs){
            return <div>Loading...</div>;
        }            

        const songs = this.props.songs.map(song => {
          return  <SongIndexItem key={song.id} song={song} deleteSong={this.props.deleteSong} />
        });

        return (
            <ul>
                {songs}
            </ul>
        )
    }
}