document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const restante3 = urlParams.get("restante3");
    const presupuesto3 = urlParams.get("presupuesto3");
    const restante4 = urlParams.get("restante4");
    const presupuesto4 = urlParams.get("presupuesto4");
    const contadorDias = urlParams.get("contadorDias");
    const contadorDias2 = urlParams.get("contadorDias2");
    const contadorDias3 = urlParams.get("contadorDias3");
    const contadorDias4 = urlParams.get("contadorDias4");

    let resultados = document.getElementById("resultados");

        if ( contadorDias !== null ) {
            if (restante3 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias + " dias, además, le sobró " + restante3;
                resultados.textContent = cuento;
            } else if (presupuesto3 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias + " dias, además, le sobró " + presupuesto3;
                resultados.textContent = cuento;
            } else if (restante4 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias + " dias, además, le sobró " + restante4;
                resultados.textContent = cuento;
            } else if (presupuesto4 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias + " dias, además, le sobró " + presupuesto4;
                resultados.textContent = cuento;
            }
        } else if ( contadorDias2 !== null ) {
            if (restante3 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias2 + " dias, además, le sobró " + restante3;
                resultados.textContent = cuento;
            } else if (presupuesto3 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias2 + " dias, además, le sobró " + presupuesto3;
                resultados.textContent = cuento;
            } else if (restante4 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias2 + " dias, además, le sobró " + restante4;
                resultados.textContent = cuento;
            } else if (presupuesto4 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias2 + " dias, además, le sobró " + presupuesto4;
                resultados.textContent = cuento;
            }
        } else if ( contadorDias3 !== null ) {
            if (restante3 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias3 + " dias, además, le sobró " + restante3;
                resultados.textContent = cuento;
            } else if (presupuesto3 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias3 + " dias, además, le sobró " + presupuesto3;
                resultados.textContent = cuento;
            } else if (restante4 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias3 + " dias, además, le sobró " + restante4;
                resultados.textContent = cuento;
            } else if (presupuesto4 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias3 + " dias, además, le sobró " + presupuesto4;
                resultados.textContent = cuento;
            }
        } else if ( contadorDias4 !== null ) {
            if (restante3 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias4 + " dias, además, le sobró " + restante3;
                resultados.textContent = cuento;
            } else if (presupuesto3 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias4 + " dias, además, le sobró " + presupuesto3;
                resultados.textContent = cuento;
            } else if (restante4 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias4 + " dias, además, le sobró " + restante4;
                resultados.textContent = cuento;
            } else if (presupuesto4 !== null) {
                let cuento = "Hildebrando a sobrevivido " + contadorDias4 + " dias, además, le sobró " + presupuesto4;
                resultados.textContent = cuento;
            }
        }
    })