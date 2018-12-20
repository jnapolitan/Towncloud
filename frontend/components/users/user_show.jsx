import React from 'react';

export default class UserShow extends React.Component {
    componentDidMount() {
        if (!this.props.user) this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        return (
            <div className="comp-show-container">
                <h1>{this.props.user.username}</h1>
            </div>
        )
        
    }
}