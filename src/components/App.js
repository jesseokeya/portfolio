import React, {Component} from 'react';
import ReactGA from 'react-ga';
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
  Contact,
  Map
} from './common'

class App extends Component {
  constructor() {
    super();
    ReactGA.initialize('UA-110478510-1');
  }

  componentWillMount() {
    ReactGA.set({
      page: window.location.pathname + window.location.search
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

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
        <Map/>,

      </div>
    </div>);
  }
}

export default App;
