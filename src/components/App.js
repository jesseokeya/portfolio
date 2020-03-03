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
  Contact
} from './common'

class App extends Component {
  constructor() {
    super();
    ReactGA.initialize('UA-110478510-1');
    this.state = {
      showMap: false
    }
  }

  componentWillMount() {
    this.httpsRedirect();
    ReactGA.set({
      page: window.location.pathname + window.location.search
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  httpsRedirect() {
    const location = window.location
    const isDevelopment = location.hostname === 'localhost'
    if (location.protocol !== "https:" && !isDevelopment) {
      location.href = 'https://www.jesseokeya.ca'
    }
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
      </div>
    </div>);
  }
}

export default App;
