import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryList = createLiElement(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryList);

function createLiElement(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
 <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

gallery.addEventListener("click", clickOpenModal);

function clickOpenModal(event) {
  event.preventDefault();

  let temp = event.target.classList.contains("gallery__image");

  if (!temp) {
    return;
  }
  const clickOpenModalEl = event.target;
  const indexGalleryItems = galleryItems.findIndex(
    (index) => index.description === clickOpenModalEl.alt
  );

  let Img = basicLightbox.create(`
    <img class="gallery__image" src="${galleryItems[indexGalleryItems].original}"
     alt="${galleryItems[indexGalleryItems].description}">`);

  Img.show();

  const closeElModal = document.querySelector(".basicLightbox");
  closeElModal.addEventListener("click", onCloseModal);

  function onCloseModal() {
    Img.close;
    const closeElModal = document.querySelector(".basicLightbox");
    closeElModal.remove();
  }
}
