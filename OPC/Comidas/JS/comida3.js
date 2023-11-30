document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const presupuesto = urlParams.get('presupuesto');

    let comidaText3 = document.getElementById('comidaText3');
    let mensaje = "No gastaste nada, tu dinero es: " + presupuesto;
    comidaText3.textContent = mensaje;
    console.log("El dinero restante es: " + presupuesto);

    let comidaConti3 = document.getElementById('comidaConti3')

    function continuar() {
        location.href = "../SalaEspera/salaEspera.html?presupuesto=" + presupuesto
    }

    comidaConti3.addEventListener("click", continuar)
});
