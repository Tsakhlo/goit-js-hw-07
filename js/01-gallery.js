import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryElements = galleryItems
    .map((galleryIt) =>
        `<div class="gallery__item">
            <a class="gallery__link" href=${galleryIt.original}> 
                <img class="gallery__image" src =${galleryIt.preview} data-source=${galleryIt.original} alt="${galleryIt.description}"/>
            </a>
        </div>`)
    .join("");

gallery.insertAdjacentHTML("beforeend", galleryElements);

gallery.addEventListener('click', galerryImage);

function galerryImage(event) {

    event.preventDefault();

    const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`,{	
        onShow: (instance) => {
            document.addEventListener('keydown', imgEsc)
        },
    
        onClose: (instance) => {
        document.removeEventListener('keydown',imgEsc)
    }});
    
    function imgEsc(event) {
        console.log(event.key)
     if (event.key === "Escape") {
        instance.close();
        console.log (event.key)
    }}
    
if (event.target.classList.contains("gallery__image")) {
        instance.show();
        console.log (event)
    }
} 
    