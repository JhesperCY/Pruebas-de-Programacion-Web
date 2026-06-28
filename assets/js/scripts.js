
document.addEventListener("DOMContentLoaded", function() {
    
      /* 1. MENÚ HAMBURGUESA RESPONSIVE
       Se activa en resoluciones iguales o menores a 768px. */

    const menuToggle = document.querySelector('.nav-menu-toggle');
    const mainNav = document.querySelector('.main-nav');



    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            // toggle() añade la clase 'active' (que armamos en el CSS) si no la tiene,
            // y se la quita si ya la tiene, mostrando/ocultando el menú.
            mainNav.classList.toggle('active');
        });
    }

       /* 2. BOTÓN SCROLL-UP (IR ARRIBA)
       Botón flotante con retorno suave al inicio.*/
      
    const scrollUpBtn = document.querySelector('.scroll-up');

    if (scrollUpBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollUpBtn.style.display = 'block';
            } else {
                // Si vuelve arriba, lo ocultamos
                scrollUpBtn.style.display = 'none';
            }
        });

        // Evento que se dispara al hacer clic en el botón
        scrollUpBtn.addEventListener('click', function(evento) {
            evento.preventDefault(); // Evita el salto brusco del href="#"
            
            // Retorno suave al inicio de la página
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});