import { connect } from 'react-redux';
import SongForm from './song_form';
import { createSong } from '../../actions/song_actions';

const mapStateToProps = state => ({
    song: { 
        title: '',
        genre: 'Julianwave',
        description: ''
    },
    formType: 'Upload Song'
});

const mapDispatchToProps = dispatch => ({
    action: song => dispatch(createSong(song))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongForm);