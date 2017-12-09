import React, {Component} from 'react';
import {ProjectsData} from '../../data';
import {Card} from '.';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projectDescription: false
    }
    this.enableScroll = this.enableScroll.bind(this);
  }

  enableScroll() {
    this.setState({projectDescription: false});
  }

  render() {
    return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
      <div className="my-auto">
        <h2 className="mb-5">Projects</h2>
        <div className="row">
          {ProjectsData.map((data, index) => (<Card key={index} data={data} description={this.state.projectDescription}/>))}
        </div>
      </div>
    </section>);
  }
}

export {
  Projects
}
