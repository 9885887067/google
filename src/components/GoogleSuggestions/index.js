import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChange = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  searchOperation = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="app-container">
        <div className="google-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="image"
            alt="google logo"
          />

          <div className="google-card-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="search"
                placeholder="Search Google"
                onChange={this.onChange}
              />
            </div>
            <ul className="list-container">
              {searchResults.map(eachList => (
                <SuggestionItem
                  key={eachList.id}
                  suggestions={eachList}
                  searchOperation={this.searchOperation}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
