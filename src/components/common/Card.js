import React, {Component} from 'react';
import ReactGA from 'react-ga';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }

  render() {
    const data = this.state.data
    return (<div className="col-sm-6 col-md-4 col-lg-3">
      <ReactGA.OutboundLink eventLabel={data.title} to={data.url} target="_blank">
        <div className="card">
          <img className="card-img-top" src={data.image} alt="cover"/>
          <div className="card-block">
            <div className="card-body bg-primary text-white">
              <h4 className="card-title text-white">{data.title}</h4>
              <p className="card-text">{data.description}</p>
              <p className="card-text">
                <small className="text-muted">Date Created: {data.Edited}</small>
              </p>
            </div>
          </div>
        </div>
      </ReactGA.OutboundLink>
    </div>);
  }
}
export {
  Card
}
