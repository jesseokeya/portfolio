import React, {Component} from 'react';
import {ProjectsData} from '../../data';
import {Card} from '.';

class Projects extends Component {
  render() {
    return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
      <div className="my-auto">
        <h2 className="mb-5">Projects</h2>
        <div className="row">
          {ProjectsData.map((data, index) => (<Card key={index} data={data}/>))}
        </div>
      </div>
    </section>);
  }
}

export {
  Projects
}
