import "../client/css/styles.css";
import Login from "./components/login.jsx";
// import store from './store';
import React, { useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom';

function App() {
    return (
        <header className="app-header">
            <h1>{Login()}</h1>
        </header>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<><App /></>);
