import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', onImgClickOpenModal);


const cardsMarkup = makeImgCards(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", cardsMarkup);

function makeImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
        .join('');
}

function onImgClickOpenModal(event) {
    event.preventDefault();

    let lightbox = new SimpleLightbox('.gallery a');
    console.log(lightbox);
}