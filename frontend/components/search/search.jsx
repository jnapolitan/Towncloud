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
        this.clearQuery = this.clearQuery.bind(this)
    }

    componentDidMount() {
        if (this.props.users.length < 2) this.props.fetchAllUsers();
        if (this.props.songs.length < 2) this.props.fetchAllSongs();
        this.searchResults = document.getElementById('search-results');
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
            if (this.searchResults) {
                this.searchResults.classList.remove('hidden');
            }

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

    clearQuery() {
        this.setState({query: ''});
        if (this.searchResults) {
            this.searchResults.classList.add('hidden');
        }
    }

    render() {
        return <div className="navbar-search">
                <input type="text" placeholder="Search" value={this.state.query} onChange={e => this.handleQuery(e)} />
                <div id="search-results" className="search-results">
                    <SearchResults 
                        users={this.state.userResults} 
                        songs={this.state.songResults} 
                        clearQuery={this.clearQuery}
                    />
                </div>
            </div>;
    }
}