import refs from './refs';

const button = refs.loadMore;

export function hide() {
  button.classList.add('hidden');
}

export function show() {
  button.classList.remove('hidden');
}
