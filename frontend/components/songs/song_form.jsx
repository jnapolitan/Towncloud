import React from 'react';
import { withRouter } from 'react-router-dom';

class SongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song: this.props.song,
            imageFile: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.action(formData);
    }

    handleFile(e) {
        this.setState({imageFile: e.currentTarget.files[0]});
    }

    render() {
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
              <input type="file" onChange={this.handleFile.bind(this)} />
              <input type="submit" value={this.props.formType} />
            </form>
          </div>;
    }
}

export default withRouter(SongForm);