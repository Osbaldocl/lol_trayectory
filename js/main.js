document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Obtener el modal
var modal = document.getElementById("imageModal");

// Obtener la imagen y el contenido del modal
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Obtener todas las imágenes que pueden ser clickeadas
var images = document.querySelectorAll('.clickable-image');

// Bucle para asignar el evento de clic a cada imagen
images.forEach(function(image) {
    image.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Obtener el elemento de cierre del modal
var span = document.getElementsByClassName("close")[0];

// Cerrar el modal cuando se haga clic en el botón de cierre
span.onclick = function() {
    modal.style.display = "none";
}
