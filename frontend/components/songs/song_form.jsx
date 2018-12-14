import React from 'react';
import { withRouter } from 'react-router-dom';

class SongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song: this.props.song,
            imageFile: null,
            imageUrl: null,
            audioFile: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageFile = this.handleImageFile.bind(this);
        this.handleAudioFile = this.handleAudioFile.bind(this);
    }

    update(field) {
        return e => {
            this.setState({song: {[field]: e.target.value}});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, genre, description } = this.state.song;
        const formData = new FormData();
        formData.append('song[title]', title);
        formData.append('song[genre]', genre);
        formData.append('song[description]', description);
        formData.append('song[image]', this.state.imageFile);
        formData.append('song[audio]', this.state.audioFile);
        this.props.action(formData);
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
            <h3>{this.props.formType}</h3>
            <form onSubmit={this.handleSubmit}>
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
                  <option value="Rock">Julianwave</option>
                  <option value="Electronic">Electronic</option>
                </select>
              </label>

              <label>
                Description
                <textarea value={this.state.description} onChange={this.update("description")} />
              </label>
                <p>Preview:</p>
              {preview}
              Add image: <input type="file" onChange={this.handleImageFile} />
              Add audio file:<input type="file" onChange={this.handleAudioFile} />
              <input type="submit" value={this.props.formType} />
            </form>
          </div>;
    }
}

export default withRouter(SongForm);