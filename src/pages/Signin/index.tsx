// Signup component
import React, {useState} from 'react';
import { IonIcon, IonPage, IonContent, IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonText } from '@ionic/react';
import {connect} from 'react-redux';

import {withRouter, Link} from 'react-router-dom';

import authActions from '../../redux/actionCreators/auth';

import { pulse } from 'ionicons/icons';
import './styles.css';

const Signin: React.FC = (props: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _setEmail = (event: any) => {
    setEmail(event.detail.value);
  }

  const _setPassword = (event: any) => {
    setPassword(event.detail.value);
  }

  const handleSignin = () => props.signin({ email, password, history: props.history });

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
      {renderEmailInput()}
      {renderPasswordInput()}
    </IonList>
  );

  const renderSigninButton = () => (
    <IonButton
      expand="block"
      onClick={handleSignin}
      className="ion-justify-content-center ion-align-items-center"
    >
      Sign in
    </IonButton>
  );

  const renderSignupButton = () => (
    <Link to="/signup">
      <IonText color="primary">
        <h5
          className="ion-justify-content-center ion-align-items-center ion-margin-vertical"
        >
            New User? Sign up
        </h5>
      </IonText>
    </Link>
  );

  return (
    <IonPage>
      <IonContent className="ion-align-items-center ion-justify-content-center ion-padding" color="ion-color-primary-contrast">
        {renderHeader()}
        {renderInputs()}
        {renderSigninButton()}
        {renderSignupButton()}
      </IonContent>
    </IonPage>
  );
};


const mapDispatchToProps = {
  signin: authActions.signinPending
}

export default withRouter(connect(null, mapDispatchToProps)(Signin));
