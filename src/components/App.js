import './App.scss';
import React from 'react';
import Routes from '../Routes';
import { Router } from "react-router-dom";
import history from '../history';

const App = () => {
    return (
        <Router history={history}>
            <div className="space-t-p ui container">
                {Routes}
            </div>
        </Router>
    )
}

export default App;