//Caso #3
document.addEventListener("DOMContentLoaded", function () {
    let cifrar = document.getElementById("cifrar");

    cifrar.addEventListener("click", function () {
        const urlParams = new URLSearchParams(window.location.search);
        const restante = urlParams.get("restante");
        const presupuesto = urlParams.get("presupuesto");

        if (restante !== null) {
            location.href = "si.html?restante=" + restante;
        } else if (presupuesto !== null) {
            location.href = "si.html?presupuesto=" + presupuesto;
        }
    });
});
