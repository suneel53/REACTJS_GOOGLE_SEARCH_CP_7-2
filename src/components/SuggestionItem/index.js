// Write your code here
import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {details, onswap} = this.props
    const {suggestion} = details

    const swap = () => {
      onswap(suggestion)
    }
    return (
      <li className="search-histtory-cont">
        <p>{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={swap}
        />
      </li>
    )
  }
}

export default SuggestionItem
