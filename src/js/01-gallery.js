import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const listGalleryRef = document.querySelector('.gallery');
listGalleryRef.addEventListener('click', onImageClick);

function createElement(preview, original, description) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');

    div.classList.add('gallery__item');
    a.classList.add('gallery__link');
    a.href = `${original}`;
    img.classList.add('gallery__image');
    img.src = `${preview}`;
    img.alt = `${description}`;

    a.append(img);
    div.append(a);
    return div;
}

const galleryMarkupRef = galleryItems.map(({ preview, original, description }) => {
    return createElement(preview, original, description)
})
listGalleryRef.append(...galleryMarkupRef);

function onImageClick(event) {
    event.preventDefault();
}

var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});