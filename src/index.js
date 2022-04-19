import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import refs from './js/refs';
import * as APIService from './js/APIService';
import * as View from './js/View';
import * as LoadMore from './js/loadMore';
import QueryController from './js/QueryController';
import * as Utils from './js/Utils';
import './sass/main.scss';

LoadMore.hide();

const slider = new simpleLightbox('.gallery a');

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

async function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value.trim();
  if (!searchQuery) return;
  QueryController.queryString = searchQuery;
  if (!QueryController.isSearchNew()) {
    return;
  } else {
    View.clearGallery(refs.gallery);
  }

  try {
    const response = await APIService.fetchPhotos(searchQuery);
    View.notifySearchQuery(response);

    const { totalHits, hits } = response;
    const pagesQuantity = Math.floor(totalHits / hits.length);
    QueryController.init(searchQuery, pagesQuantity);

    View.renderGallery(refs.gallery, response.hits);
    slider.refresh();
    LoadMore.show();
    LoadMore.addClickListener(onClickMore);
  } catch (error) {
    event.target.reset();
    return;
  }
}

async function onClickMore(event) {
  try {
    console.log(QueryController.page);
    const page = QueryController.nextPage;
    console.log(QueryController.page);
    const searchString = QueryController.queryString;
    const response = await APIService.fetchPhotos(searchString, page);
    View.renderGallery(refs.gallery, response.hits);
    Utils.scroll();
    slider.refresh();
  } catch (error) {
    return;
  }

  if (!QueryController.hasNextPage()) {
    View.notifyEndOfGallery();
    LoadMore.hide();
    return;
  }
}
