document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const restante = urlParams.get('restante');

    let texto = document.getElementById('comidaText2');
    let mensaje = "Te sobró " + restante;
    texto.textContent = mensaje;
    console.log("El dinero restante es: " + restante);

    let comidaConti2 = document.getElementById('comidaConti2')

    function continuar() {
        location.href = "../SalaEspera/salaEspera.html?restante=" + restante
    }

    comidaConti2.addEventListener("click", continuar)
});
