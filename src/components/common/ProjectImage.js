import React, {Component} from 'react';
import ReactGA from 'react-ga';

class ProjectImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }

  render() {
    const isMobile = window.innerWidth <= 800
    const data = this.state.data
    const defaultImageStyles = { 
      height: !isMobile ? '55vh' : '80vh', 
      width: '100%',
      textAlign: 'center'
    }
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div
          data-toggle="popover"
          data-trigger="hover"
          title={data.title}
          data-content={data.description}
        >
          <ReactGA.OutboundLink
            eventLabel={data.title}
            to={data.url}
            target="_blank"
          >
            <img
              className="img-thumbnail rounded shadow"
              src={data.image}
              alt={data.title}
              style={defaultImageStyles}
            />
          </ReactGA.OutboundLink>
        </div>
      </div>
    );
  }
}

export {
  ProjectImage
}
