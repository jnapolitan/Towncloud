import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  handleDemo(e) {
    e.preventDefault();

    const demoUser = {
      username: 'demo',
      password: 'demo123'
    };

    this.props.demoLogin(demoUser);
  }

  render() {

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((err, idx) => (<li key={idx}>{err}</li>))
    }

    return (
        <div className="session-form-container">
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
            <button className="demo-login-btn" onClick={this.handleDemo}>Demo</button>
          </form>
        </div>
    )
  }
}