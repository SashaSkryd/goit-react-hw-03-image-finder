import React, { Component } from "react"

import Searchbar from "../Searchbar/Searchbar.jsx"
import ImageGallery from "../ImageGallery/ImageGallery.jsx"
import Loader from "../Loader/Loader.js"
import ShowMore from "../Button/Button.jsx"
import Modal from "../Modal/Modal.js"
import fetchImage from '../../services/base-http.service.js';

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

  componentDidUpdate(prevProps, prevState) {
    const oldSearch = prevState.search
    const newSearch = this.state.search

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
    const { search, page } = this.state;

    this.setState({ loading: true });

    fetchImage(search, page)
      .then((data) => {
        this.setState((prevState) => ({
          page: prevState.page + 1,
          scroll: document.documentElement.scrollTop,
          data: [...prevState.data, ...data.hits],
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
