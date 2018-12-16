import React from 'react';
import { connect } from 'react-redux';
import SongForm from './song_form';
import { fetchSong, updateSong, clearSongErrors } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        song: state.entities.songs[ownProps.match.params.songId],
        formType: 'Edit Song',
        errors: state.errors.song.responseJSON
    };
};

const mapDispatchToProps = dispatch => ({
    fetchSong: id => dispatch(fetchSong(id)),
    action: (songData, id) => dispatch(updateSong(songData, id)),
    clearSongErrors: () => dispatch(clearSongErrors())
});

class EditSongForm extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.songId != this.props.match.params.songId) {
            this.props.fetchSong(this.props.match.params.songId);
        }
    }

    render() {
        if (!this.props.song) {
            return <div>Loading...</div>
        }
        const { action, formType, song } = this.props;
        return(
            <SongForm 
                action={action}
                formType={formType}
                song={song}
                clearSongErrors={this.props.clearSongErrors}
                errors={this.props.errors}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditSongForm);
