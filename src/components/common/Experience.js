import React, {Component} from 'react';
import {ExperienceData} from '../../data';

class Experience extends Component {
  render() {
    return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>

        {
          ExperienceData.map((data, index) => (<div key={index} className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{data.jobTitle}</h3>
              <div className="subheading mb-3">{data.company}</div>
              <p>{data.jobDesc}</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{data.duration}</span>
            </div>
          </div>))
        }

      </div>

    </section>);
  }
}

export {
  Experience
}
