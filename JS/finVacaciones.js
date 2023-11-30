document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const restante3 = urlParams.get("restante3");
    const presupuesto3 = urlParams.get("presupuesto3");
    const contadorDias = urlParams.get("contadorDias");

    let resultados = document.getElementById("resultados");

    if (restante3 !== null) {
        let cuento = "Hildebrando a sobrevivido " + contadorDias + " dias, además, le sobró " + restante3;
        resultados.textContent = cuento;
    } else if (presupuesto3 !== null) {
        let cuento = "Hildebrando a sobrevivido " + contadorDias + " dias, además, le sobró " + presupuesto3;
        resultados.textContent = cuento;
    }
})