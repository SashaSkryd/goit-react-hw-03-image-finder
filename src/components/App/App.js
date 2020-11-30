import React, { Component } from 'react';
import axios from 'axios'

import Searchbar from '../Searchbar/Searchbar.jsx'
import ImageGallery from '../ImageGallery/ImageGallery.jsx'
import Loader from '../Loader/Loader.js'
import ShowMore from '../Button/Button.jsx'

export default class App extends Component {
  state = {
    data: [],
    page: 1,
    search: '',
    loading: false,
     errors: '',
  }
  
   KEY = '18953015-07ab6e07958b18192a80798da'

  componentDidUpdate(prevProps, prevState) {
    const oldSearch = prevState.search;
    const newSearch = this.state.search;

    if (oldSearch !== newSearch) {
      this.fetchPosts();
      
    }       
      
  }
  
  fetchPosts=() =>{
    this.setState({ loading: true });
    axios
      .get(`https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=${this.KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then((res) => {
        this.setState({ data: res.data.hits });
         window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
        });
      })
      .catch((errors) => this.setState({ errors }))
      .finally(() => this.setState({ loading: false }));
      
     this.setState((prevState) => ({
        nextPage: Boolean(this.state.data.next),
        page: prevState.page + 1,
        data: [...prevState.data, ...this.state.data],
     }));
     
  };

  handleSearch = (search) => {
    this.setState({
      data: [],
      search,
      page: 1,
      nextPage: true,
    });
  };

render() {
  const { data, loading, errors, nextPage } = this.state;
   
  return (
    <>
      <Searchbar handleSearch={this.handleSearch} />
      {loading && <Loader />}
      {errors && <p>{errors.message}</p>}
      {!data.length && !loading && <p>Try more</p>}
      <ImageGallery data={data} />
      {!!data.length && (<ShowMore fetchPosts={this.fetchPosts}/>)}
      </>
      )
  };
}