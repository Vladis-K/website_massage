import React from 'react';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import HomePageRu from "./pages/HomePageRu"
import NotFoundPage from "./pages/NotFoundPage";

export default (
    <Router>
        <div>
            <Route
                exact
                path="/"
                render={() => <Redirect from="/" to="/home/ru" />}
            />
            <Route path="/home/ru" component={HomePageRu} />
            <Route path="/home/en" component={HomePage} />
            <Route path="/404" component={NotFoundPage} />
        </div>
    </Router>
);