import React, { useEffect } from 'react';
import { IonPage } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Menu from '../components/Menu';
import RoutesStack from '../RoutesStack';

import { appPages } from './hamBurgerConfig';

import authActions from '../redux/actionCreators/auth';
import bootstrapActions from '../redux/actionCreators/bootstrap';

import { store } from '../App';

interface RootProps extends RouteComponentProps {
  accessToken: string
}

const Root: React.FC<RootProps> = (props: any) => {

  useEffect(() => {
    console.log('Called on mount', props);

    store.dispatch(bootstrapActions.verifyUser(props.history));
  }, []);

  return (
    <IonPage>
      <Menu appPages={appPages} signoutUser={props.signoutUser} />

      <Route exact path="/" render={() => <Redirect to="/home"/>} />
      <RoutesStack />
    </IonPage>
  );
};

const mapDispatchToProps = {
  signoutUser: authActions.signoutUser
}

const mapStateToProps = (state: any) => {
  const { auth: { accessToken } } = state;

  return {
    accessToken
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
