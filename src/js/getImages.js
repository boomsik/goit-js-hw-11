import axios from 'axios';

const API_KEY = '5277758-f1ca1546d6b5e2ffe2eaf824e';
const URL = 'https://pixabay.com/api/';
const PER_PAGE = 40;

export async function getImages(searchQuery, pageCount) {
  const params = {
    params: {
      timeout: 1000,
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'false',
      page: pageCount,
      per_page: PER_PAGE,
    },
  };

  const response = await axios.get(URL, params);
  return response.data;
}
