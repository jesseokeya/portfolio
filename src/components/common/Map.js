import React, {Component} from 'react';


class Map extends Component {

  render() {
    return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="map">
      <br/>
      <div className="my-auto">
        <h2 className="mb-5">Map</h2>
        <div className="map-container">
          <div className="map-main" id="viewMap"></div>
        </div>
      </div>
    </section>);
  }
}

export {
  Map
}
