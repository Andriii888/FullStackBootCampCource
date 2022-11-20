// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this lineimport { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css";
const galaryBoxRef = document.querySelector('.gallery');

const lightBox = require('simplelightbox');

function imgValueFromGalleryItems(values) {
    let arrayValues = values.map(({ preview, original, description }) => {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${ preview }"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
       `
    }).join('');
    return galaryBoxRef.innerHTML += arrayValues;
}; 
imgValueFromGalleryItems(galleryItems);

new SimpleLightbox('.gallery a', { /* options */ });


