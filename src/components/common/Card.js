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
    return (<div className="col-sm-6 col-md-4 col-lg-4" >
      <div className="card shadow">
        <img className="card-img-top img-fluid" src={data.image} alt="Project Img"/>
        <div className="card-block">
          <br/>
          <div className="contain-card">
            <h3 className="card-title">{data.title}</h3>
            <p className="card-text">
              <b> {data.heading} </b>
            </p>
            <p className="card-text">{data.description}</p>
          </div>
        </div>
        <br/>
        <blockquote className="blockquote contain-card">
          click to view project
        </blockquote>
        <div className="card-footer text-center">
          <small className="text-muted">
            Date Edited: {data.dateEdited}
          </small>
        </div>
      </div>
    </div>);
  }
}

export {
  Card
}
