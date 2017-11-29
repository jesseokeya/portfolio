import React, {Component} from 'react';

class Skills extends Component {
  render() {
    return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
      <div className="my-auto">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline list-icons">
          <li className="list-inline-item">
            <i className="devicons devicons-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-css3"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-javascript"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-jquery"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-sass"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-less"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-bootstrap"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-wordpress"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-grunt"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-gulp"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicons devicons-npm"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Mobile-First, Responsive Design</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Browser Testing &amp; Debugging</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Functional Teams</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Agile Development &amp; Scrum</li>
        </ul>
      </div>
    </section>);
  }
}

export {
  Skills
}
