import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div id="about" className="site-section pt-0">
        <div className="container">
          <div className="testimonial-wrap">
            <div className="testimonial">
              <img src="img/person_1.jpg" alt="Hello" className="img-fluid"/>
              <blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
                  explicabo inventore.</p>
              </blockquote>
              <p>&mdash; Jean Hicks</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default About;
