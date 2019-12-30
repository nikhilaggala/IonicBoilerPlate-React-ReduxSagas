import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';
import { AppPage } from '../types';

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
  signoutUser: (history: any) => {}
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages, signoutUser, history }) => (
  <IonMenu contentId="main" type="overlay">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem routerLink={appPage.url} routerDirection="none">
                <IonIcon slot="start" icon={appPage.icon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      <IonButton onClick={() => {
        signoutUser(history);
      }}>
        signout
      </IonButton>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default withRouter(Menu);
