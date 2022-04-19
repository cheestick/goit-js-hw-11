import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import * as APIService from './js/APIService';
import * as View from './js/View';
import refs from './js/refs';
import './sass/main.scss';

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

async function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.searchQuery.value;

  try {
    const response = await APIService.fetchPhotos(searchQuery);
    View.notifySearchQuery(response);
    View.renderGallery(refs.gallery, response.hits);
    new simpleLightbox('.gallery a');
  } catch (error) {
    throw new Error('Error', error.message);
  }

  // event.target.reset();
}
