import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Footer from './elements/Footer.js';
import Header from './elements/Header.js';
import About from './elements/About.js';
import AllNews from './news/AllNews.js';
import TopHeadlines from './news/TopHeadlines.js';

import './App.css';


class App extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  */

  render() {
    return (
      <Router>
        <div>
          <div id="main">
            <div className="site-section site-portfolio">
              <div className="container">
                <Header />

                <Switch>
                  <Route path="/" exact={true} component={TopHeadlines} ></Route>
                  <Route path="/:handle" component={AllNews} ></Route>
                </Switch>
              </div>
            </div>

            <About />  
          </div>

          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
