import React from 'react';
import { Helmet } from 'react-helmet';


const NotFoundPage = () => (
    <div>
        <Helmet>
            <title>404 Not Found</title>
        </Helmet>
            <div className="page-not-found">
                <div className="page-not-found__sign">Sorry... Page not Found!</div>
                <div className="page-not-found__description">
                    Please, visit the <a href="/home" className="page-not-found__description_link">Homepage</a>
                </div>
            </div>
    </div>
);

export default NotFoundPage;