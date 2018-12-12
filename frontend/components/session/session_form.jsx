import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement(document.getElementById('root'));

export default class SessionForm extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    username: '',
    password: '',
    modalIsOpen: true
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.openModal = this.openModal.bind(this);
  this.afterOpenModal = this.afterOpenModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.props.history.push('/');
  }

  render () {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((err, idx) => (<li key={idx}>{err}</li>))
    }


    
    return <div>
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Session Form Modal">
          <div className="session-form-container">
            {/* <div className="session-form-logo"></div> */}
            <h1>{this.props.formType}</h1>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Your username" value={this.state.username} onChange={this.update("username")} />
              <input type="password" placeholder="Your password" value={this.state.password} onChange={this.update("password")} />
              <ul className="session-form-errors">{errors}</ul>
              <button type="submit">Continue</button>
              <p className="form-text">
                We may use your email and devices for updates and tips on
                SoundCloud's products and services, and for activities
                notifications. You can unsubscribe for free at any time in
                your notification settings.
              </p>
              <p className="form-text">
              We may use information you provide us in order to show you targeted ads as described in our
              &nbsp;<a href="https://www.google.com/search?safe=off&tbm=isch&source=hp&biw=1760&bih=1066&ei=-FwRXJv2AoHH_wScjr6YBA&q=puppies&oq=puppies&gs_l=img.3..35i39j0l9.787.1439..1523...0.0..1.59.368.7......1....1..gws-wiz-img.....0.nYpm3VCEIkQ" target="_blank">
                  Privacy Policy</a>.
              </p>
            </form>
          </div>
        </Modal>
      </div>;
  }
}