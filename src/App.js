import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Footer from './elements/Footer.js';
import Header from './elements/Header.js';
import AllNews from './news/AllNews.js';
import TopHeadlines from './news/TopHeadlines.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <div>
          
          <div id="main">
            <div className="site-section site-portfolio">
              <div className="container">
                <Header />

                <Switch>
                  <Route path="/" exact={true} component={TopHeadlines} ></Route>
                  <Route path="/:handle" component={AllNews} ></Route>
                  <Route component={() => (<div>404 Not found </div>)} />
                </Switch>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
