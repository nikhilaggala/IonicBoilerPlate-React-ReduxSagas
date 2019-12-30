// Signup component
import React, {useState} from 'react';
import { IonIcon, IonPage, IonContent, IonList, IonItem, IonInput, IonButton, IonCardHeader, IonText } from '@ionic/react';
import {connect} from 'react-redux';

import {withRouter, Link} from 'react-router-dom';

import authActions from '../../redux/actionCreators/auth';

import { pulse } from 'ionicons/icons';
import './styles.css';

const SignupRoute: React.FC = (props: any) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _setUsername = (event: any) => {
    setUsername(event.detail.value);
  }

  const _setEmail = (event: any) => {
    setEmail(event.detail.value);
  }

  const _setPassword = (event: any) => {
    setPassword(event.detail.value);
  }

  const handleSignup = () => props.signup({ username, email, password });


  // render methods

  const renderLogo = () => (
    <div className="logoContainer ion-align-items-center ion-justify-content-center ion-text-center">
      JNHFHM
      <IonIcon icon={pulse} className="iconClass"/>
    </div>
  );

  const renderHeader = () => (
    <IonCardHeader className="ion-align-items-center ion-justify-content-center logo">
      {renderLogo()}
    </IonCardHeader>
  );

  const renderUsernameInput = () => (
    <IonItem>
      <IonInput
        clearInput
        placeholder="username"
        type="text"
        onIonChange={_setUsername} required></IonInput>
    </IonItem>
  );

  const renderEmailInput = () => (
    <IonItem>
      <IonInput
        required
        clearInput
        className="ion-padding-vertical"
        placeholder="email"
        pattern="email"
        type="email"
        onIonChange={_setEmail}></IonInput>
    </IonItem>
  );

  const renderPasswordInput = () => (
    <IonItem>
      <IonInput
        required
        clearInput
        placeholder="password"
        type="password"
        onIonChange={_setPassword}></IonInput>
    </IonItem>
  );

  const renderInputs = () => (
    <IonList className="ion-padding-vertical">
      {renderUsernameInput()}
      {renderEmailInput()}
      {renderPasswordInput()}
    </IonList>
  );

  const renderSignupButton = () => (
    <IonButton
      expand="block"
      onClick={handleSignup}
      className="ion-justify-content-center ion-align-items-center"
    >
      Sign up
    </IonButton>
  );

  const renderSigninButton = () => (
    <Link to="/signin">
      <IonText color="primary">
        <h5
          className="ion-justify-content-center ion-align-items-center ion-margin-vertical"
        >
            Already have an account? Sign in
        </h5>
      </IonText>
    </Link>
  );

  return (
    <IonPage>
      <IonContent className="ion-align-items-center ion-justify-content-center ion-padding" color="ion-color-primary-contrast">
        {renderHeader()}
        {renderInputs()}
        {renderSignupButton()}
        {renderSigninButton()}
      </IonContent>
    </IonPage>
  );
};


const mapDispatchToProps = {
  signup: authActions.signupPending
}

export default withRouter(connect(null, mapDispatchToProps)(SignupRoute));
