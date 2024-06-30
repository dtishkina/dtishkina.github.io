import {loadSection} from "./loader.js";
import {initializeDefaultChip, initializeGallery} from "./gallery.js";
import {swapIcons} from "./swapIcons.js";
import {menuToggle} from "./menuToggle.js";
import {smoothScroll} from "./smoothScroll.js";

document.addEventListener('DOMContentLoaded', () => {
    loadSection('sections/header.html', 'header', () => {
        swapIcons();
        menuToggle();
        smoothScroll();
    });
    loadSection('sections/preview.html', 'preview');
    loadSection('sections/gallery.html', 'gallery', () => {
        initializeGallery();
        initializeDefaultChip();
    });
    loadSection('sections/new_collection.html', 'new_collection');
    loadSection('sections/about.html', 'about');
    loadSection('sections/footer.html', 'footer', smoothScroll);
});
