import React from 'react';
import SongIndexItem from './song_index_item';
import AdBanner from '../ads/ad_banner';

export default class SongIndex extends React.Component {
    componentDidMount() {
        if (this.props.songs.length < 2) this.props.fetchAllSongs();
    }

    render() {

        if (this.props.songs.length < 2) {
            return <div>Loading...</div>;
        }            

        const songs = this.props.songs.map(song => {
          return  <SongIndexItem key={song.id} song={song} />
        });

        return <div className="comp-index-container">
            <h3>More of what you like</h3>
            <p className="muted-text">
              Check out the latest sounds from your town and beyond
            </p>
            <div className="song-show-body">
              <ul className="comp-items-container">{songs}</ul>
              <div className="ad-banner-parent">
                <AdBanner />
              </div>
            </div>
          </div>;
    }
}