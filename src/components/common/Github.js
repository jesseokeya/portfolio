import React, {Component} from 'react';

class Github extends Component {
  render() {
    return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="github">
      <div className="my-auto">
        <h2 className="mb-5">Github Activity</h2>
        <div id="feed"></div>
      </div>
    </section>);
  }
}

export {
  Github
}
