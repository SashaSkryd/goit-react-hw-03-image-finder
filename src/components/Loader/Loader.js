import React, {Component} from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";
export default class App extends React.Component {

  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />
    );
  }
}