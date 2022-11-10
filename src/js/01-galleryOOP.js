import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const listGalleryRef = document.querySelector('.gallery');

class Gallery {
    constructor(listGalleryRef, galleryItems) {
        this.listGalleryRef = listGalleryRef;
        this.galleryItems = galleryItems;
    }

    init() {
        this.addListeners()
        const galleryMarkupRef = this.galleryItems.map(({ preview, original, description }) => {
            return this.createElement(preview, original, description)
        })
        this.listGalleryRef.append(...galleryMarkupRef);
        let lightbox = new SimpleLightbox(".gallery a", {
            captionsData: "alt",
            captionDelay: 250,
        });
    }
    addListeners() {
        this.listGalleryRef.addEventListener('click', this.onImageClick.bind(this));
    }
    createElement(preview, original, description) {
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
    onImageClick(event) {
        event.preventDefault();
    }
}


new Gallery(listGalleryRef, galleryItems).init();