//
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.innerHTML = navLinks.classList.contains('active')
            ? '<img src="/assets/icons/close-menu-icon.svg" alt="Close Icon">'
            : '<img src="/assets/icons/menu-icon.svg" alt="Menu Icon">';
    });
});