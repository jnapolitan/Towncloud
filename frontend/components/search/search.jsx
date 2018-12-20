import React from 'react';
import SearchResults from './search_results';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            userResults: [],
            songResults: []
        };
    }

    componentDidMount() {
        if (this.props.users.length < 2) this.props.fetchAllUsers();
        if (this.props.songs.length < 2) this.props.fetchAllSongs();
    }

    componentDidUpdate() {
        
    }

    updateResults() {
        const { users, songs } = this.props;
        if (!users || !songs) return;

        const regex = this.state.query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        const regexQuery = new RegExp(regex, 'gi');

        if (this.state.query.length < 2) {
            this.setState({
                userResults: [],
                songResults: []
            });
        } else {
            let userResults = [];
            let songResults = [];

            users.forEach(user => {
                if (user.username.match(regexQuery)) {
                    userResults.push(user);
                }
            });

            songs.forEach(song => {
                if (song.title.match(regexQuery)) {
                    songResults.push(song);
                }
            });

            this.setState({
                userResults: userResults,
                songResults: songResults
            });
        }
    }

    handleQuery(e) {
        this.setState({ query: e.target.value }, () => {
            this.updateResults();
        });
    }

    render() {
        return <div className="navbar-search">
                <input type="text" placeholder="Search" value={this.state.query} onChange={e => this.handleQuery(e)} />
                <div className="search-results">
                    <SearchResults users={this.state.userResults} songs={this.state.songResults} />
                </div>
            </div>;
    }
}