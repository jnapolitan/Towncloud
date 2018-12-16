import React from 'react';
import { withRouter } from 'react-router-dom';

class SongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.song;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageFile = this.handleImageFile.bind(this);
        this.handleAudioFile = this.handleAudioFile.bind(this);
    }

    componentWillUnmount() {
        this.props.clearSongErrors();
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, genre, description, imageFile, audioFile } = this.state;
        const formData = new FormData();
        formData.append('song[title]', title);
        formData.append('song[genre]', genre);
        formData.append('song[description]', description);
        if (imageFile) formData.append('song[image]', imageFile);
        if (audioFile) formData.append('song[audio]', audioFile);
        this.props.action(formData, this.state.id);
    }

    handleImageFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({imageFile: file, imageUrl: fileReader.result});
        };

        if (file) fileReader.readAsDataURL(file);
    }

    handleAudioFile(e) {
        this.setState({ audioFile: e.currentTarget.files[0] });
    }

    render() {
        let errors;
        if (this.props.errors) {
            errors = this.props.errors.map((err, idx) => (<li key={idx}>{err}</li>))
        }
        return <div className="song-form-container">
            <form onSubmit={this.handleSubmit}>
              <h2>{this.props.formType}</h2>
              <div className="song-form-columns">
                <div className="song-form-left">
                    <p>Image preview:</p>
                    <img className="form-img-preview" src={this.state.imageUrl} />
                    <p>Image:</p> <input type="file" onChange={this.handleImageFile} />
                    <p>Audio:</p>
                    <input type="file" onChange={this.handleAudioFile} />
                </div>
                <div className="song-form-right">
                    <label>
                        <p>Title</p>
                        <input 
                            className="song-form-input" 
                            type="text" 
                            value={this.state.title} 
                            onChange={this.update("title")} 
                            placeholder="Name your track"
                        />
                    </label>
                    <label>
                        <p>Genre</p>
                        <select className="song-form-select" value={this.state.genre} onChange={this.update("genre")}>
                        <option value="Julianwave">Julianwave</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Hip Hop">Hip Hop</option>
                        <option value="Rock">Rock</option>
                        <option value="Animal Sounds">Animal Sounds</option>
                        <option value="Electronic">Electronic</option>
                        </select>
                    </label>

                    <label>
                        <p>Description</p>
                        <textarea 
                            value={this.state.description} 
                            onChange={this.update("description")} 
                            placeholder="Describe your track"
                            className="song-form-textbox"
                        />
                    </label>
                    <ul className="form-errors">{errors}</ul>
                </div>
              </div>
              <button className="song-form-btn" type="submit">Save</button>
            </form>
          </div>;
    }
}

export default withRouter(SongForm);