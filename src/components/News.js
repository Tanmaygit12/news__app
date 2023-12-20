import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  constructor() {
    super();
    console.log("hello constructor");
    this.state = {
      articles: [],  // Correct initialization for the state
      loading: false,
      page: 1,  // page initialization
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6e254c3376e64dccad224d513554286b&page=1pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,totalResults:parsedData.totalResults});
  }

  handleNextClick=async()=>{
    console.log("next clicked");
    if(Math.ceil(this.state.page+1>this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6e254c3376e64dccad224d513554286b&page=${this.state.page+1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page : this.state.page+1,
        articles: parsedData.articles
    })
    }
    
  }

  handlePreviousClick=async()=>{
    console.log("next clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6e254c3376e64dccad224d513554286b&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page : this.state.page-1,
      articles: parsedData.articles
    })
  } 

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Todays Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element) => {  // Fix: use this.state.articles
            return (
              <div className='col-md-4 mb-3' key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} NewsUrl={element.url} />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1}class="btn btn-dark" onClick={this.handlePreviousClick}> &laquo; Previous</button>
          <button type="button" disabled={this.state.page+1>this.state.totalResults/20}class="btn btn-dark"onClick={this.handleNextClick} >Next &raquo;</button>
          </div>
        </div>
      </div>
    );
  }
}

