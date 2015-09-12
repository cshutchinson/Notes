
import React from 'react';	
import App from './components/App.jsx';

	require('bootstrap/less/bootstrap.less');
// require('./main.css');

main();

function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    React.render(<App />, app);
}