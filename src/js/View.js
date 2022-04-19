import { Notify } from 'notiflix';
import * as Markup from './imageCardMarkup';

export function renderGallery(gallery, data) {
  const markup = Markup.imageGalleryMarkup(data);
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export function notifySearchQuery({ hits, totalHits }) {
  if (!hits.length) {
    Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    throw new Error('Wrong request');
  }

  Notify.success(`Hooray! We found ${totalHits} images.`);
}

export function notifyEndOfGallery() {
  Notify.info("We're sorry, but you've reached the end of search results.");
}
