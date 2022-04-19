import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import refs from './js/refs';
import * as APIService from './js/APIService';
import * as View from './js/View';
import * as LoadMore from './js/loadMore';
import './sass/main.scss';

LoadMore.hide();
refs.searchForm.addEventListener('submit', onSearchFormSubmit);

async function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.searchQuery.value;

  try {
    const response = await APIService.fetchPhotos(searchQuery);
    View.notifySearchQuery(response);
    View.renderGallery(refs.gallery, response.hits);
    new simpleLightbox('.gallery a');
    LoadMore.show();
  } catch (error) {
    event.target.reset();
    return;
  }
}
