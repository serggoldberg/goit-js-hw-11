export function getImages(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
      key: '43274302-b3b24986af50d43a0f99334ad',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `${BASE_URL}?${params}`;
  
    return fetch(url).then(res => res.json());
  }