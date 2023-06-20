const imageClassPrefix = 'bg-image';
const mobileImageClassPrefix = 'mobile-bg-image';
const section = document.getElementById('Parara');
let currentImageIndex = 0;
const images = [
    'path-to-image1.jpg',
    'path-to-image2.jpg',
    'path-to-image3.jpg',
    'path-to-image4.jpg'
];

function changeBackground(imageElement, className, mobileClassName) {
    const images = imageElement.parentNode.parentNode.querySelectorAll('img');
    images.forEach(img => img.classList.remove('selected'));
    imageElement.classList.add('selected');

    section.classList.remove(getCurrentBackgroundClass());
    if (isMobileDevice()) {
        section.classList.remove(getCurrentMobileBackgroundClass());
        section.classList.add(mobileClassName);
    } else {
        section.classList.remove(getCurrentBackgroundClass());
        section.classList.add(className);
    }
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
    return 'bg-image1';
}

function getCurrentMobileBackgroundClass() {
    const classList = section.classList;
    for (let i = 0; i < classList.length; i++) {
        const className = classList[i];
        if (className.startsWith(mobileImageClassPrefix)) {
            return className;
        }
    }
    return 'mobile-bg-image1';
}

function changeBackgroundAutomatically() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const imageElements = section.querySelectorAll('.image-list li img');
    const imageElement = imageElements[currentImageIndex];
    const className = 'bg-image' + (currentImageIndex + 1);
    const mobileClassName = 'mobile-bg-image' + (currentImageIndex + 1);
    changeBackground(imageElement, className, mobileClassName);
}

setInterval(changeBackgroundAutomatically, 5000);

function isMobileDevice() {
    return window.innerWidth <= 828;
}



function NumeroCali() {
    /* Texto que deseas copiar al portapapeles */
    var textoACopiar = "(+57) 312 259 8401";
    
    /* Crea un elemento de texto temporal */
    var tempInput = document.createElement("input");
    tempInput.value = textoACopiar;
    
    /* Agrega el elemento al DOM */
    document.body.appendChild(tempInput);
    
    /* Selecciona el contenido del elemento de texto */
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Para dispositivos móviles */
    
    /* Copia el contenido al portapapeles */
    document.execCommand("copy");
    
    /* Remueve el elemento temporal */
    document.body.removeChild(tempInput);
}

function NumeroBogota() {
    /* Texto que deseas copiar al portapapeles */
    var textoACopiar = "(+57) 310 275 1404";
    
    /* Crea un elemento de texto temporal */
    var tempInput = document.createElement("input");
    tempInput.value = textoACopiar;
    
    /* Agrega el elemento al DOM */
    document.body.appendChild(tempInput);
    
    /* Selecciona el contenido del elemento de texto */
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Para dispositivos móviles */
    
    /* Copia el contenido al portapapeles */
    document.execCommand("copy");
    
    /* Remueve el elemento temporal */
    document.body.removeChild(tempInput);
}