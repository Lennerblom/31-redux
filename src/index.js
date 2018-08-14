import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import App from './component/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();