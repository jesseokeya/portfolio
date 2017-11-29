import React, {Component} from 'react';
import {
  Nav,
  About,
  Experience,
  Education,
  Skills,
  Interests,
  Awards,
  Github
} from './common'

class App extends Component {
  render() {
    return (<div>
      <Nav/>
      <div className="container-fluid p-0">
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Interests/>
        <Awards/>
        <Github/>
      </div>
    </div>);
  }
}

export default App;
