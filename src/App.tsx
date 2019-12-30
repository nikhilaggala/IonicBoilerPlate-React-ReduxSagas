/**
 * This is like heart of the app.
 * This will be only wrapped by providers.
 */
import React from 'react';
import { IonApp } from '@ionic/react';
import {Route} from 'react-router-dom';
import { IonReactRouter as Router } from '@ionic/react-router';
import { Provider } from 'react-redux';

import createStore from './store';

import Root from './Root';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

export const store = createStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div id="app">
        <IonApp>
          <Route path="/" component={Root} />
        </IonApp>
      </div>
    </Router>
  </Provider>
);

export default App;
