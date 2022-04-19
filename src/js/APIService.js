import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '26837545-22abd047bbfdb35dbd690db9c';

const queryParams = {
  key: API_KEY,
  q: '',
  per_page: 40,
  page: 1,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

export async function fetchPhotos(query = 'cars', page = 10) {
  const response = await axios.get(BASE_URL, {
    params: { ...queryParams, q: query, page },
  });

  return response.data;
}
