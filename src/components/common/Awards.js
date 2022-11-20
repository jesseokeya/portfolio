import React, { Component, Fragment } from "react";
import { awards } from "../../data";

class Awards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awards,
    };
  }

  displayAwards(awards) {
    return awards.map((award, index) => (
      <div key={index} className="col-sm-4 col-md-4 col-lg-4">
        <div className="highlight-border">
          <img
            src={award.src}
            className="img-fluid cursor-pointer"
            alt={award.alt}
            data-toggle="modal"
            data-target="#awardModal"
            style={{ width: "100%", minHeight: "27rem" }}
          />
        </div>
      </div>
    ));
  }

  render() {
    const { awards } = this.state;
    return (
      <Fragment>
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="awards"
        >
          <br />
          <div className="my-auto">
            <h2 className="mb-5">
              {$(window).width() <= 375 ? <span>Awards</span> : `Awards`}
            </h2>
            <div className="row">{this.displayAwards(awards)}</div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export { Awards };
