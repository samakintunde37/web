import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Petitions from '../pages/Petitions';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const AppRoutes = () => (
  <>
    <Navigation />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/petitions" component={Petitions} exact />
    </Switch>
    <Footer />
  </>
);

export default AppRoutes;
