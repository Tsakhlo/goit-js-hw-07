import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryElements = galleryItems
    .map((galleryIt) =>
        `<a class="gallery__link" href=${galleryIt.original}> 
                <img class="gallery__image" src =${galleryIt.preview} alt="${galleryIt.description}"/>
        </a>
        `).join("");

gallery.insertAdjacentHTML("beforeend", galleryElements);
  
const lightbox = new SimpleLightbox(".gallery__link", { captionSelector: "img", captionsData: "alt", captionDelay: 250 });