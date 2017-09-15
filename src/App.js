import React from 'react';
import { Helmet } from 'react-helmet';
import routes from './routes';

const App = () => (
    <div>
        <Helmet titleTemplate="%s / massage-baby" />
        {routes}
    </div>
);

export default App;