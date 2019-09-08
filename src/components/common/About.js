import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";

class About extends Component {
  showMap() {
    ReactGA.ga("send", "pageview", "/viewedMap");
    window.location.href = "/#map";
  }

  render() {
    const seperate = window.innerWidth >= 376 ? "" : <br />;
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="container-fluid">
          <div className="my-auto">
            <br />
            <h1 className="mb-0">
              Jesse {seperate}
              <span className="text-primary">Okeya</span>
            </h1>
            <h2 className="proffession">
              {$(window).width() <= 375 ? (
                <div>
                  Software
                  <div className="developer">Developer</div>
                </div>
              ) : (
                "Software Developer"
              )}
            </h2>
            <div className="subheading mb-5">
              <a className="map-link" onClick={this.showMap}>
                933 Greenbriar Avenue
              </a>
              <span className="space-out">·</span>
              <a className="map-link" onClick={this.showMap}>
                Ottawa, CA K2C 0J8
              </a>
              <span className="space-out">·</span>
              <a href="tel:6134135540">(613) 413-5540</a>
              <span className="space-out">·</span>
              <a href="mailto:jesseokeya@gmail.com">Jesseokeya@gmail.com</a>
            </div>
            <p className="mb-5">
              Passionate Software Engineer with years of verifiable success in
              delivering appropriate technology solutions for web and mobile
              products. Comprehensive knowledge of platform development,
              enterprise architecture, agile methodologies, cloud services, and
              web-based applications.
            </p>
            <ul className="list-inline list-social-icons mb-0">
              <li className="list-inline-item">
                <a href="/">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-home fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://medium.com/@jesseokeya" target="_blank">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-rss fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/jesse-okeya-45a38510a/"
                  target="_blank"
                >
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/jesseokeya" target="_blank">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              {/* <li className="list-inline-item">
                <a href="/pdf/resume.pdf" target="_blank">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-folder fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export { About };
