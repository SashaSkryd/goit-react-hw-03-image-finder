import React, { Component } from "react"
import axios from "axios"

import Searchbar from "../Searchbar/Searchbar.jsx"
import ImageGallery from "../ImageGallery/ImageGallery.jsx"
import Loader from "../Loader/Loader.js"
import ShowMore from "../Button/Button.jsx"
import Modal from "../Modal/Modal.js"

export default class App extends Component {
  state = {
    data: [],
    page: 1,
    search: "",
    loading: false,
    errors: "",
    scroll: 0,
    largeImageURL: "",
  }

  KEY = "18953015-07ab6e07958b18192a80798da"

  componentDidUpdate(prevProps, prevState) {
    const oldSearch = prevState.search
    const newSearch = this.state.search
    const oldPage = prevState.page
    const newPage = this.state.page

    if (oldSearch !== newSearch) {
      this.fetchPosts()
    }
    if (prevState.data !== this.state.data) {
      window.scrollTo({
        top: prevState.scroll + 1038,
        behavior: "smooth",
      })
    }
  }

  fetchPosts = () => {
    this.setState({ loading: true })
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=${this.KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((res) => {
        this.setState((prevState) => ({
          nextPage: Boolean(res.data.hits.next),
          page: prevState.page + 1,
          scroll: document.documentElement.scrollTop,
          data: [...prevState.data, ...res.data.hits],
        }))
      })
      .catch((errors) => this.setState({ errors }))
      .finally(() => this.setState({ loading: false }))
  }

  handleSearch = (search) => {
    this.setState({
      data: [],
      search,
      page: 1,
      nextPage: true,
    })
  }

  getLargeImage = (url) => {
    this.setState({
      largeImageURL: url,
    })
  }

  closeModal = () => {
    this.setState({ largeImageURL: "" })
  }

  render() {
    const { data, loading, errors, largeImageURL } = this.state

    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        {loading && <Loader />}
        {errors && <p>{errors.message}</p>}
        {!data.length && !loading && <p>Try more</p>}
        <ImageGallery data={data} getLargeImage={this.getLargeImage} />
        {!!data.length && <ShowMore fetchPosts={this.fetchPosts} />}
        {largeImageURL && <Modal largeImageURL={largeImageURL} closeModal={this.closeModal} />}
      </>
    )
  }
}
