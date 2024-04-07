import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'tags',
  captionsDelay: 250,
});

export function getGallery(data) {
  const markup = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img 
              class="gallery-image" 
              src="${webformatURL}" 
              alt="Image ${tags}" 
              />
          </a>
          <div class="descrip-gallery">
            <ul class="descrip-img">
              <li class="descrip-item">Likes</li>
              <li class="descrip-item">${likes}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Views</li>
              <li class="descrip-item">${views}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Comments</li>
              <li class="descrip-item">${comments}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Downloads</li>
              <li class="descrip-item">${downloads}</li>
            </ul>
          </div>
        </li>
      `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}