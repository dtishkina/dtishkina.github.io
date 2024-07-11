export const menuToggle = () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const menuWrapper = document.getElementById('menu-wrapper')

    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        menuWrapper.classList.toggle('active');
        menuIcon.innerHTML = navLinks.classList.contains('active')
            ? '<img src="/house-project/assets/icons/close-menu-icon.svg" alt="Close Icon">'
            : '<img src="/house-project/assets/icons/menu-icon.svg" alt="Menu Icon">';
    });

    document.addEventListener('click', (e) => {
        if (!menuWrapper.contains(e.target) && menuWrapper.classList.contains('active')) {
            menuWrapper.classList.remove('active');
            navLinks.classList.remove('active');
            menuIcon.innerHTML = '<img src="/house-project/assets/icons/menu-icon.svg" alt="Menu Icon">';
        }
    });

    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            menuWrapper.classList.remove('active');
            navLinks.classList.remove('active');
            menuIcon.innerHTML = '<img src="/house-project/assets/icons/menu-icon.svg" alt="Menu Icon">';
        }
    });
};
