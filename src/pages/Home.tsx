import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Home.css';

const HomePage: React.FC = (props: any) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLabel>Home screen</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
