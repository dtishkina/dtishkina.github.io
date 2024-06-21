import {loadSection} from "/js/loader.js";
import {initializeGallery} from "/js/gallery.js";
import {swapIcons} from "/js/swapIcons.js";
import {menuToggle} from "/js/menuToggle.js";
import {smoothScroll} from "/js/smoothScroll.js";

document.addEventListener('DOMContentLoaded', () => {
    loadSection('sections/header.html', 'header', () => {
        swapIcons();
        menuToggle();
        smoothScroll();
    });
    loadSection('sections/preview.html', 'preview');
    loadSection('sections/gallery.html', 'gallery', initializeGallery);
});
