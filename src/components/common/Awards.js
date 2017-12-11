import React, {Component} from 'react';
import $ from 'jquery';

class Awards extends Component {
  render() {
    return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
      <br/>
      <div className="my-auto">
        <h2 className="mb-5">
          {
            ($(window).width() <= 375)
              ? (<span>
                Awards &
                <br/>
                <br/>
                Certifications
              </span>)
              : `Awards & Certifications`
          }

        </h2>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Google Analytics Certified Developer
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Mobile Web Specialist - Google Certification
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Go Programming Langunage - Udemy Certification
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            <a href="https://github.com/orgs/QlikHackathon/people">Decode Ottawa - Team Qlik - Hackathon 2017</a>
          </li>
        </ul>
      </div>
    </section>);
  }
}

export {
  Awards
}
