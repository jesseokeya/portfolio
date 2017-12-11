import React, {Component} from 'react';
import {ProjectsData} from '../../data';
import {ProjectImage} from '.';

class Projects extends Component {
  render() {
    return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
      <br/>
      <div className="my-auto">
        <h2 className="mb-5">Projects</h2>
        <div className="row">
          {ProjectsData.map((data, index) => (<ProjectImage key={index} data={data}/>))}
        </div>
      </div>
    </section>);
  }
}

export {
  Projects
}
