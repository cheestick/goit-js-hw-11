import { Notify } from 'notiflix';
import * as Markup from './imageCardMarkup';

// Notify.info("We're sorry, but you've reached the end of search results.");

export function renderGallery(gallery, data) {
  const markup = Markup.imageGalleryMarkup(data);
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function notifySearchQuery({ hits, totalHits }) {
  if (!hits.length) {
    Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    throw new Error('Wrong request');
  }

  Notify.success(`Hooray! We found ${totalHits} images.`);
}
