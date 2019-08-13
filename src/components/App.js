import './App.scss';
import React from 'react';
import Routes from '../Routes';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="space-t-p ui container">
                {Routes}
            </div>
        </Router>
    )
}

export default App;