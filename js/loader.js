export const loadSection = (url, containerId, callback) => {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            if (callback) callback();
        });
};
