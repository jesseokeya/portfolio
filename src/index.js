import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './serviceWorkers/registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
console.log(ReactDOM);
registerServiceWorker();
