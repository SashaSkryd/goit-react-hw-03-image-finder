import React, { Component } from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import style from "../App/App.module.css"

import Loader from "react-loader-spinner"
export default class App extends React.Component {
  render() {
    return (
      <div className={style.Loader}>
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    )
  }
}
