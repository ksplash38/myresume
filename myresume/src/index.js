

import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
// import './styles/style.css';

// import './javascript/jquery.min.js';
// import './javascript/resume.min.js';

import './app/styles/boot/css/bootstrap.min.css';

import './app/styles/resume.css';
import './app/styles/hover-min.css';

// import './js/resume.min.js';





import App from './app/main';
import registerServiceWorker from './app/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
