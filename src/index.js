import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import * as APIService from './js/APIService';
import * as Markup from './js/imageCardMarkup';
import refs from './js/refs';
import './sass/main.scss';

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

async function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.searchQuery.value;
  const imageList = await APIService.fetchPhotos(searchQuery);
  console.log(imageList);
  const markup = imageList.map(Markup.imageCardMarkup).join('');
  refs.gallery.innerHTML = markup;
  new simpleLightbox('.gallery a');
  //   event.target.reset();
}
