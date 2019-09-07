import React, {Component} from 'react';
import $ from 'jquery';

class Nav extends Component {
  closeNav() {
    if ($(window).width() <= 834) {
      $('.navbar-toggler').click();
    }
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <div className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">
            <img
              src="./favicon.ico"
              className="rounded float-left"
              alt="avatar"
              width="55px"
              height="55px"
            />
            <a href="/" className="portfolio-heading">
              <b>Portfolio</b>
            </a>
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="https://avatars0.githubusercontent.com/u/12955039?s=460&v=4"
              alt="avatars"
            />
          </span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                id="about-nav"
                onClick={this.closeNav}
                className="nav-link js-scroll-trigger"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.closeNav}
                className="nav-link js-scroll-trigger"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.closeNav}
                className="nav-link js-scroll-trigger"
                href="#education"
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.closeNav}
                className="nav-link js-scroll-trigger"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.closeNav}
                className="nav-link js-scroll-trigger"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.closeNav}
                className="nav-link js-scroll-trigger"
                href="#interests"
              >
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.closeNav}
                className="nav-link js-scroll-trigger"
                href="#awards"
              >
                Awards
              </a>
            </li>
            <div className="hr-line"></div>
            <li className="nav-item">
              <a
                onClick={this.closeNav}
                className="nav-link js-scroll-trigger"
                href="https://medium.com/@jesseokeya"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.closeNav}
                className="nav-link js-scroll-trigger"
                href="#github"
              >
                Github
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.closeNav}
                className="nav-link js-scroll-trigger"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );

  }
}

export {
  Nav
}
