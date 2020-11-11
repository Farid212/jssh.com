import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navigation from '../Navigation';

// routes table
import indexRoutes from '../../constants/routes';

const App = () =>(
  <Router>
    <Navigation />
    {indexRoutes.map((route, key)=>(
      <Route path={route.path} key={key} component={route.component} exact />
    ))}
  </Router>
);

export default App;