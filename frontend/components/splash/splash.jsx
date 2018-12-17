import React from 'react';
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import SongIndexItem from '../../components/songs/song_index_item';
import { Link } from 'react-router-dom';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.clearSessionErrors = props.clearSessionErrors;
  }

  logInModal() {

    const logInModal = document.getElementById("log-in-modal");
    const logInBtn = document.getElementById("log-in-modal-btn");
    const closeLogIn = document.getElementsByClassName("close")[0];

    logInBtn.onclick = () => {
      logInModal.style.display = "block";
    };

    closeLogIn.onclick = () => {
      logInModal.style.display = "none";
      this.clearSessionErrors();
    };

    window.addEventListener('click', (e) => {
      if (e.target == logInModal) {
        logInModal.style.display = "none";
        this.clearSessionErrors();
      }
    });
  }

  signUpModal() {
    const signUpModal = document.getElementById("sign-up-modal");
    const signUpBtn = document.getElementById("sign-up-modal-btn");
    const closeSignUp = document.getElementsByClassName("close")[1];

    signUpBtn.onclick = () => {
      signUpModal.style.display = "block";
    };

    closeSignUp.onclick = () => {
      signUpModal.style.display = "none";
      this.clearSessionErrors();
    };

    window.addEventListener('click', (e) => {
      if (e.target == signUpModal) {
        signUpModal.style.display = "none";
        this.clearSessionErrors();
      }
    });
  }

  componentDidMount() {
    this.signUpModal();
    this.logInModal();
    this.props.fetchAllSongs();
  }

  latestSongs() {
    if (!this.props.songs) return <div>Loading...</div>

    const songs = this.props.songs.slice(0, 10).map(song => {
      return <SongIndexItem key={song.id} song={song} />;
    })
    
    return <div className="trending-songs-container">
        <h2>Hear what's trending for free in your community</h2>
        <ul className="trending-song-items">
          {songs}
        </ul>
      </div>;
  }
  
  render () {

    return <div className="splash background-white">
        <div className="hero">
          <a href="/"><div className="splash-logo" /></a>
          <div className="splash-actions">
            <button id="log-in-modal-btn" className="sign-in">Sign in</button>
            <button id="sign-up-modal-btn" className="create-account">Create account</button>
          </div>
          <div className="hero-text">
            <h1>Discover more local artists with TownCloud</h1>
            <p>
              TownCloud lets you discover and connect with artists from your
              local community.
            </p>
          </div>
        </div>
        <div id="log-in-modal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <LoginFormContainer />
          </div>
        </div>
        <div id="sign-up-modal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <SignupFormContainer />
          </div>
        </div>
        {this.latestSongs()}
      </div>;
  }
}