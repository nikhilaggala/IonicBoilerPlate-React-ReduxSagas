/**
 * All routes and its components for app will be defined here
 */
import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';

import Home from '../pages/Home';
import List from '../pages/List';
import Charts from '../pages/Charts';
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

const RoutesStack: React.FC = () => (
  <IonRouterOutlet id="main">
    <Route path="/signin" component={Signin} exact />
    <Route path="/signup" component={Signup} exact />
    <Route path="/home" component={Home} exact={true} />
    <Route path="/home/list" component={List} exact={true} />
    <Route path="/home/charts" component={Charts} exact />
  </IonRouterOutlet>
);

export default RoutesStack;
