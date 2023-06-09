window.addEventListener("DOMContentLoaded", function() {
  var imageList = document.getElementById("image-list");
  var images = imageList.getElementsByTagName("img");
  var body = document.body;
  var currentIndex = 0;

  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", changeBackground);
  }

  function changeBackground() {
    var clickedImage = this.src;
    body.style.backgroundImage = "url('" + clickedImage + "')";

    // Restablecer estilos de todas las imágenes
    for (var i = 0; i < images.length; i++) {
      images[i].style.transform = "scale(1)";
    }

    // Aplicar estilo a la imagen clickeada
    this.style.transform = "scale(1.2)";
  }

  function changeImage() {
    var nextImage = images[currentIndex].src;
    body.style.backgroundImage = "url('" + nextImage + "')";

    // Restablecer estilos de todas las imágenes
    for (var i = 0; i < images.length; i++) {
      images[i].style.transform = "scale(1)";
    }

    // Aplicar estilo a la imagen actual
    images[currentIndex].style.transform = "scale(1.2)";

    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  }

  // Llamar a la función de cambio de imágenes inicialmente
  changeImage();

  // Establecer el intervalo para cambiar automáticamente las imágenes cada 3 segundos
  setInterval(changeImage, 3000);
});