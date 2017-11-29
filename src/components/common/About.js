import React, {Component} from 'react';

class About extends Component {
  render() {
    const seperate = (window.innerWidth >= 376)
      ? ''
      : <br/>;
    return (<section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="container-fluid">
        <div className="my-auto">
          <h1 className="mb-0">Jesse {seperate}
            <span className="text-primary">Okeya</span>
          </h1>
          <h2 class="proffession"> Software Developer </h2>
          <div className="subheading mb-5">933 Greenbriar Avenue · Ottawa, CA K2C 0J8 · (613) 413-5540 ·
            <a href="mailto:jesseokeya@gmail.com">Jesseokeya@gmail.com</a>
          </div>
          <p className="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
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
              <a href="/#blog">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-rss fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/jesse-okeya-45a38510a/">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/jesseokeya">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>);
  }
}

export {
  About
}
