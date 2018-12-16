import { connect } from 'react-redux';
import SongForm from './song_form';
import { createSong, clearSongErrors } from '../../actions/song_actions';

const mapStateToProps = state => ({
    song: { 
        title: '',
        genre: 'Julianwave',
        description: '',
        imageFile: null,
        imageUrl: 'http://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png',
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