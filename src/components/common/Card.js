import React, {Component} from 'react';

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
      <a href={data.url}>
        <div className="card">
          <img className="card-img-top" src={data.image} alt="cover"/>
          <div className="card-block">
            <div className="card-body bg-primary text-white">
              <h4 className="card-title text-white">{data.title}</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>);
  }
}
export {
  Card
}
