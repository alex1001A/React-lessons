import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom'


// Styles
import './style/main.scss';
// import App from './App';

// Components
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <App />
 </BrowserRouter>
  
);

