import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', onImgClickOpenModal);


const cardsMarkup = makeImgCards(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", cardsMarkup);

function makeImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
        .join('');
}


function onImgClickOpenModal(event) {
  event.preventDefault();

  galleryRef.addEventListener('keydown', onClickEscape);
  function onClickEscape(event) {
      if (event.key !== "Escape") {
        return;
      }
      instance.close();
      galleryRef.removeEventListener('keydown', onClickEscape);
}

  const selectedImg = event.target.dataset.source; 
  const instance = basicLightbox.create(`
      <div class="modal">
          <img src="${selectedImg}">
          <a>Close</a>
      </div>
  `, {
      onShow: (instance) => {
      instance.element().querySelector('img').onclick = instance.close
    }
  })
  
  instance.show();
}
