export const swapIcons = () => {
    const icons = document.querySelectorAll('.icon');

    icons.forEach(icon => {
        const iconName = icon.getAttribute('data-icon');

        const defaultIcon = `assets/icons/${iconName}-default.svg`;
        const hoverIcon = `assets/icons/${iconName}-hover.svg`;
        const activeIcon = `assets/icons/${iconName}-active.svg`;

        const setIcon = (src) => {
            icon.setAttribute('src', src);
        };

        setIcon(defaultIcon);

        icon.addEventListener('mouseover', () => setIcon(hoverIcon));
        icon.addEventListener('mouseout', () => setIcon(defaultIcon));
        icon.addEventListener('mousedown', () => setIcon(activeIcon));
        icon.addEventListener('mouseup', () => setIcon(defaultIcon));
    });
};
