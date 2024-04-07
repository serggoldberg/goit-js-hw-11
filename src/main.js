import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';

import { getGallery } from './js/render-functions';

const refs = {
  loaderEl: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
  formEl: document.querySelector('.form-search'),
  inputEl: document.querySelector('.input-text'),
};

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: '❌ Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  getImages(query)
    .then(data => {
      gallery.innerHTML = '';
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            '❌ Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        hideLoader();
        const markup = getGallery(data.hits);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          '❌ Sorry, an error occurred while fetching images. Please try again later!',
        position: 'topRight',
      });
      console.error('Error fetching images:', error);
    });
});

function hideLoader() {
  loaderEl.classList.remove('visually-hidden');
}
