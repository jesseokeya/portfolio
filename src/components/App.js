import React, {Component} from 'react';
import {
  Nav,
  About,
  Experience,
  Education,
  Skills,
  Interests,
  Awards,
  Github,
  Projects,
  Contact
} from './common'

class App extends Component {
  render() {
    return (<div>
      <Nav/>
      <div className="container-fluid p-0 color-bg">
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <Interests/>
        <Awards/>
        <Github/>
        <Contact/>
      </div>
    </div>);
  }
}

export default App;
