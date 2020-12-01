import React, { Component } from "react"
import style from "../App/App.module.css"
import PropTypes from "prop-types"

export default class Searchbar extends Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
  }

  state = {
    text: "",
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { handleSearch } = this.props
    handleSearch(this.state.text)
    this.setState({ text: "" })
  }

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={style.SearchFormInput}
            name="text"
            type="search"
            autoComplete="off"
            autoFocus
            value={this.state.text}
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}
