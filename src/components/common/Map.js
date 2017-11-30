import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => (<i className="fa fa-map-marker fa-4x map-marker" aria-hidden="true">{text}</i>);

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 45.365932799999996,
      lng: -75.7043425
    },
    zoom: 14
  };

  render() {
    return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="map">
      <div className="my-auto">
        <h2 className="mb-5">Map</h2>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
            <AnyReactComponent lat={45.365932799999996} lng={-75.7043425} text={''}/>
          </GoogleMapReact>
        </div>
      </div>
    </section>);
  }
}

export {
  Map
}
