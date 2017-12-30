

import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
// import './styles/style.css';

// import './javascript/jquery.min.js';
// import './javascript/resume.min.js';

import './styles/boot/css/bootstrap.min.css';
import './styles/resume.css';
import './styles/hover-min.css';
// import './js/resume.min.js';





import App from './main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
