import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    username: '',
    password: ''
  };
  this.handleSubmit = this.handleSubmit.bind(this)
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

  render () {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map(err => (<li>{err}</li>))
    }
    
    return (
      <div>
        <ul>{ errors }</ul>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.update('username')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <button type="submit">{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

function EmailInput(props) {
  return (
    <label>Email:
        <input type="text" value={this.state.email} onChange={this.update('email')} />
    </label>
  )
}