// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })
  }

  onswap = suggestion => {
    console.log(suggestion)
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchItems = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-cont">
        <div className="cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <ul className="unorderlist-cont">
            <li className="input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon-logo"
              />
              <input
                type="search"
                className="input"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                placeholder="Search Google"
              />
            </li>
            {searchItems.map(each => (
              <SuggestionItem
                details={each}
                onswap={this.onswap}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
