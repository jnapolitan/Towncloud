import React from 'react';
import { connect } from 'react-redux';
import SongForm from './song_form';
import { fetchSong, updateSong } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
    return {
    song: state.entities.songs[ownProps.match.params.songId],
    formType: 'Edit Song'
}};

const mapDispatchToProps = dispatch => ({
    fetchSong: id => dispatch(fetchSong(id)),
    action: song => dispatch(updateSong(song))
});

class EditSongForm extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.songId != this.props.match.params.songId) {
            this.props.fetchSong(this.props.match.params.songId);
        }
    }

    render() {
        const { action, formType, song } = this.props;
        return(
            <SongForm 
                action={action}
                formType={formType}
                song={song}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditSongForm);
