import React from 'react';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";


export default (
    <Router>
        <div>
            <Route
                exact
                path="/"
                render={() => <Redirect from="/" to="/home" />}
            />
            <Route path="/home" component={HomePage} />
        </div>
    </Router>
);