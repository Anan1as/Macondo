document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const restante = urlParams.get('restante');

    let texto = document.getElementById('comidaText1');
    let mensaje = "Te sobró " + restante;
    texto.textContent = mensaje;
    console.log("El dinero restante es: " + restante);

    let comidaConti1 = document.getElementById('comidaConti1')

    function continuar() {
        location.href = "../SalaEspera/salaEspera.html?restante=" + restante
    }

    comidaConti1.addEventListener("click", continuar)
});
