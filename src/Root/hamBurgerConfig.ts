import { home, list, person } from 'ionicons/icons';
import { AppPage } from '../types';

export const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'Profile',
    url: '/home/list',
    icon: person
  },
  {
    title: 'Charts',
    url: '/home/charts',
    icon: list
  }
];
