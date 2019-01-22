import { connect } from 'react-redux';
import SongForm from './song_form';
import { createSong, clearSongErrors } from '../../actions/song_actions';

const mapStateToProps = state => ({
    song: { 
        title: '',
        genre: 'Julianwave',
        description: '',
        imageFile: null,
        imageUrl: 'https://s3-us-west-1.amazonaws.com/towndcloud-seed/song-upload.png',
        audioFile: null
    },
    formType: 'Upload Song',
    errors: state.errors.song.responseJSON
});

const mapDispatchToProps = dispatch => ({
    action: song => dispatch(createSong(song)),
    clearSongErrors: () => dispatch(clearSongErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongForm);