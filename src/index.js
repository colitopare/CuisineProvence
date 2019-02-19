import React from 'react';
// destructuration pour ne prendre que render dans react-dom
import { render } from 'react-dom';
import App from './components/App';

// import CSS
import './index.css';

render( 
    
    <App/ > ,
    document.getElementById('root')
);