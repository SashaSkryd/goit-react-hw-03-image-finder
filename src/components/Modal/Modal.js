import React, { Component } from "react"
import PropTypes from "prop-types"
import style from "../App/App.module.css"

export default class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    cloceModal: PropTypes.func,
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal()
    }
  }

  render() {
    return (
      <div className={style.Overlay}>
        <div className={style.Modal}>
          <img src={this.props.largeImageURL} alt="" className={style.Image} onClick={() => this.props.closeModal()} />
        </div>
      </div>
    )
  }
}
