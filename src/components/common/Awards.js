import React, { Component, Fragment } from "react";
import { awards } from "../../data";
import $ from "jquery";

class Awards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awards,
      currentAward: awards[0],
    };
  }

  setCurrentAward = (currentAward) => this.setState({ currentAward })

  displayAwards(awards) {
    return awards.map((award, index) => (
      <div key={index} className="col-sm-4 col-md-4 col-lg-4">
        <div className="highlight-border">
          <img
            src={award.src}
            className="img-fluid cursor-pointer"
            alt={award.alt}
            onClick={(_) => this.setCurrentAward(award)}
            data-toggle="modal"
            data-target="#awardModal"
          />
        </div>
      </div>
    ));
  }

  render() {
    const { awards, currentAward } = this.state;
    return (
      <Fragment>
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="awards"
        >
          <br />
          <div className="my-auto">
            <h2 className="mb-5">
              {$(window).width() <= 375 ? (
                <span>
                  Awards &
                  <br />
                  <br />
                  Certifications
                </span>
              ) : (
                `Awards & Certifications`
              )}
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
                <a href="https://github.com/orgs/QlikHackathon/people">
                  Decode Ottawa - Team Qlik - Hackathon 2017
                </a>
              </li>
            </ul>
            <br />
            <div className="row">{this.displayAwards(awards)}</div>
          </div>
        </section>
        <div
          className="modal fade"
          data-backdrop="static"
          id="awardModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="awardModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="awardModalLabel">
                  {currentAward.reason}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <img
                      src={currentAward.src}
                      className="img-fluid"
                      alt={currentAward.alt}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export { Awards };
