
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
    // 1. Obtención de valores del formulario
    const inputM2 = document.getElementById("metros").value;
    const selectMaterial = document.getElementById("material").value;
    const inputPisos = document.getElementById("pisos").value;
    const divResultado = document.getElementById("resultado");

    // 2. Validación de entrada (Operadores de comparación)
    if (inputM2 <= 0 || inputM2 === "") {
        alert("Por favor, ingrese un área válida en metros cuadrados.");
        return;
    }

    // 3. Definición de costos base (Uso de variables y constantes)
    let costoBase;

    // Estructura Switch para determinar el costo según el material
    switch (selectMaterial) {
        case "economico":
            costoBase = 500;
            break;
        case "premium":
            costoBase = 900;
            break;
        case "sostenible":
            costoBase = 750;
            break;
        default:
            costoBase = 500;
    }

    // 4. Operación matemática (Operadores aritméticos)
    const totalEstimado = inputM2 * costoBase * inputPisos;

    // 5. Salida de datos dinámica al HTML (Manipulación del DOM)
    divResultado.style.display = "block";
    divResultado.innerHTML = `
        <p style="color: var(--color4);">Detalle de su Estimación:</p>
        <ul style="list-style: none; padding: 0;">
            <li>Área: ${inputM2} m²</li>
            <li>Costo m²: $${costoBase}</li>
            <li>Pisos: ${inputPisos}</li>
        </ul>
        <hr>
        <h3>Total: $${totalEstimado.toLocaleString()}</h3>
        <small style="font-weight: normal;">*Precios referenciales basados en tarifas actuales.</small>
    `;

    // Diagnóstico en consola para depuración
    console.log("Cálculo ejecutado correctamente. Total:", totalEstimado);
}
});