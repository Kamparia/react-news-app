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

  componentDidMount = async () => {
    const self = this;
    const api_key = "8e9f1bf2b8c841278301c14cf986965e";
    const api_endpoint = `http://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&language=en&apiKey=${api_key}`;

    await axios.get(api_endpoint).then(function (response){
      const data = response.data;
      const news = data.articles.slice(0, 30);
      //console.log(news);

      self.setState({
        news: news
      });
    }).catch(function (err){
      console.log(err);
    })
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