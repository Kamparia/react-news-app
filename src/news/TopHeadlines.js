import React, {Component} from 'react';
import axios from 'axios';

import SingleNewsItem from './SingleNewsItem.js';

class TopHeadlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  fetchNews = async () => {
    const self = this;
    const api_key = "00996750f97644cca91df97021253add";
    const api_endpoint = `https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&language=en&apiKey=${api_key}`;

    await axios.get(api_endpoint).then(function (response){
      const data = response.data;
      const news = data.articles.slice(0, 30);

      self.setState({
        news: news
      });
    }).catch(function (err){
      console.log(err);
    })
  }

  componentDidMount = () => {
    this.fetchNews();
  }

  renderNewsItems(){
    return this.state.news.map((item, i) => (
      <SingleNewsItem key={i} item={item}/>
    ));    
  }

  render() {
    return (
      <div className="row no-gutter">
        {this.renderNewsItems()}
      </div>      
    );
  }

}

export default TopHeadlines;
