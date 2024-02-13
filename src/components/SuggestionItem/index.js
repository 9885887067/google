import './index.css'

const SuggestionItem = props => {
  const {suggestions, searchOperation} = props

  const {suggestion} = suggestions

  const changeValue = () => {
    searchOperation(suggestion)
  }

  return (
    <li className="list-item">
      <p className="sugge">{suggestion}</p>
      <button className="button" type="button" onClick={changeValue}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
