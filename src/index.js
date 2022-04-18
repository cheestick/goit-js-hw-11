import * as APIService from './js/APIService';
import refs from './js/refs';
import './sass/main.scss';

APIService.fetchPhotos('cars').then(console.log).catch(console.log);
