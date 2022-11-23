import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="education"
      >
        <br />
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Algonquin College</h3>
              <div className="subheading mb-3">
                Computer Engineering Technology
              </div>
              <div>Computing Science</div>
              <p>GPA: 3.85</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2017 - June 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Carleton University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Software Development Track</div>
              <p>GPA: 3.48</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2015 - April 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">GreatLakes College Of Toronto</h3>
              <div className="subheading mb-3">Computer Technology Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2014 - January 2015</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { Education };
