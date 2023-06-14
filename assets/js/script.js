const imageClassPrefix = 'bg-image';
const section = document.getElementById('Parara');
let currentImageIndex = 0;
const images = [
    'path-to-image1.jpg',
    'path-to-image2.jpg',
    'path-to-image3.jpg',
    'path-to-image4.jpg'
];

function changeBackground(imageElement, className) {
    const images = imageElement.parentNode.parentNode.querySelectorAll('img');
    images.forEach(img => img.classList.remove('selected'));
    imageElement.classList.add('selected');

    section.classList.remove(getCurrentBackgroundClass());
    section.classList.add(className);
    currentImageIndex = Array.from(images).indexOf(imageElement);
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

function changeBackgroundAutomatically() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const imageElements = section.querySelectorAll('.image-list li img');
    const imageElement = imageElements[currentImageIndex];
    const className = 'bg-image' + (currentImageIndex + 1);
    changeBackground(imageElement, className);
}

setInterval(changeBackgroundAutomatically, 5000);
