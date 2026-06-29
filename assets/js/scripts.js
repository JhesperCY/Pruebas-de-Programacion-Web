
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

    function calcularPresupuesto() {
    const m2 = document.getElementById("metros").value;
    const material = document.getElementById("material").value;
    const pisos = document.getElementById("pisos").value;
    const divResultado = document.getElementById("resultado");

    // 2. Validación básica [10]
    if (m2 <= 0 || m2 === "") {
        alert("Por favor, ingrese una cantidad válida de metros cuadrados.");
        return;
    }

    let costoBaseM2;
    
    switch (material) {
        case "economico":
            costoBaseM2 = 500;
            break;
        case "premium":
            costoBaseM2 = 900;
            break;
        case "sostenible":
            costoBaseM2 = 750;
            break;
        default:
            costoBaseM2 = 500;
    }

    const total = m2 * costoBaseM2 * pisos;

    // 5. Mostrar resultado en el HTML [11]
    divResultado.style.display = "block";
    divResultado.innerHTML = `
        <p>Análisis de Presupuesto:</p>
        <ul>
            <li>Costo por m²: $${costoBaseM2}</li>
            <li>Área total: ${m2} m²</li>
            <li>Pisos: ${pisos}</li>
        </ul>
        <hr>
        <h3>Total Estimado: $${total.toLocaleString()}</h3>
        <small>*Precios referenciales sujetos a evaluación técnica.</small>
    `;
    
    console.log("Cálculo realizado: ", total); // Diagnóstico en consola [11]
}
});