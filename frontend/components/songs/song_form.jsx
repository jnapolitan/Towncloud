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
        const preview = this.state.imageUrl ? <img className="preview" src={this.state.imageUrl} /> : null;
        return <div className="song-form-container">
            <form className="song-form" onSubmit={this.handleSubmit}>
              <h2>{this.props.formType}</h2>
              <div className="song-form-columns">
                <div className="song-form-left">
                    <p>Preview:</p>
                    {preview}
                    Add image: <input type="file" onChange={this.handleImageFile} />
                    Add audio file:
                    <input type="file" onChange={this.handleAudioFile} />
                </div>
                <div className="song-form-right">
                <label>
                    Title
                    <input type="text" value={this.state.title} onChange={this.update("title")} />
                </label>
                <label>
                    Genre
                    <select value={this.state.genre} onChange={this.update("genre")}>
                    <option value="Julianwave">Julianwave</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="Rock">Rock</option>
                    <option value="Animal Sounds">Animal Sounds</option>
                    <option value="Electronic">Electronic</option>
                    </select>
                </label>

                <label>
                    Description
                    <textarea value={this.state.description} onChange={this.update("description")} />
                </label>
                </div>
              </div>
              <input className="song-form-btn" type="submit" value="Save" />
            </form>
          </div>;
    }
}

export default withRouter(SongForm);