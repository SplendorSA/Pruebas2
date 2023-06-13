const imageClassPrefix = 'bg-image';
const section = document.getElementById('Parara');

function changeBackground(imageElement, className) {
    const images = imageElement.parentNode.parentNode.querySelectorAll('img');
    images.forEach(img => img.classList.remove('selected'));
    imageElement.classList.add('selected');

    section.classList.remove(getCurrentBackgroundClass());
    section.classList.add(className);
}

function getCurrentBackgroundClass() {
    const classList = section.classList;
    for (let i = 0; i < classList.length; i++) {
        const className = classList[i];
        if (className.startsWith(imageClassPrefix)) {
            return className;
        }
    }
    return 'bg-prueba';
}
