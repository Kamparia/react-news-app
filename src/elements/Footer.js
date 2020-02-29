import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="mb-1">&copy; Copyright Olaoye Anthony Somide. All Rights Reserved</p>
              <div className="credits">
                Data Source: <a href="https://newsapi.org/" rel="noopener noreferrer" target="_blank">News API</a>
              </div>
            </div>
            <div className="col-sm-6 social text-md-right">
              <a href="https://linkedin.com"><span className="icofont-linkedin"></span></a>
              <a href="https://twitter.com"><span className="icofont-twitter"></span></a>
              <a href="https://facebook.com"><span className="icofont-facebook"></span></a>
              <a href="https://github.com"><span className="icofont-github"></span></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
