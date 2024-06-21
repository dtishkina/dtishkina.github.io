export const menuToggle = () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.innerHTML = navLinks.classList.contains('active')
            ? '<img src="/assets/icons/close-menu-icon.svg" alt="Close Icon">'
            : '<img src="/assets/icons/menu-icon.svg" alt="Menu Icon">';
    });
};
