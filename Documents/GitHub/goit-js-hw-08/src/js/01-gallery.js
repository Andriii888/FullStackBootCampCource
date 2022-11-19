// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this lineimport { galleryItems } from './gallery-items.js';

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



// galaryBoxRef.addEventListener('click', onZoomClickedImg); 

// function onZoomClickedImg(e) { 
//     e.preventDefault();
//     if (e.target.nodeName !== "IMG") {
//         return;
//     }
//     const imgSrc = e.target.dataset.source;
//     const instance = basicLightbox.create(`
//     <img src='${imgSrc}' width="800" height="600">
// `)
//     instance.show();

//     const escBox = document.querySelector('.basicLightbox');
//     document.addEventListener('keydown', (e) => {
//         if (e.key === "Escape") {
//             instance.close();
//        }
//     });
// };




// Change code below this line
