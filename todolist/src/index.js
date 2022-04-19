import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './app';
import Todo from './todo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Todo />
  </React.StrictMode>
);
