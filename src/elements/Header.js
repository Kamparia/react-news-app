import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="row mb-5 align-items-center">
        <div className="col-md-12 col-lg-6 mb-4 mb-lg-0">
          <h2>
            <Link to="./">React News App</Link>
          </h2>
          <p className="mb-0">Grab your news on the GO!</p>
        </div>

        <div className="col-md-12 col-lg-6 text-left text-lg-right">
          <div id="filters" className="filters">
            <Link to="./">Headlines</Link>
            <Link to="./politics">Politics</Link>
            <Link to="./business">Business</Link>
            <Link to="./sports">Sports</Link>
            <Link to="./cryptos">Cryptos</Link>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
