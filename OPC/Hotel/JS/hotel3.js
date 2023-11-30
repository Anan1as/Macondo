document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const restante3 = urlParams.get("restante3");
    const presupuesto3 = urlParams.get("presupuesto3");
    let contadorDias3 = urlParams.get("contadorDias3");

    let amarillo = document.getElementById("amarillo");
    let azul = document.getElementById("azul");
    let rojo = document.getElementById("rojo");
    let verde = document.getElementById("verde");

    amarillo.addEventListener("click", function() {
        if (restante3 !== null) {
            let contadorDias4 = contadorDias3 - 0;
            location.href = "Colores/amarillo.html?restante3=" + restante3 + "&contadorDias=" + contadorDias4;
        } else if (presupuesto3 !== null) {
            let contadorDias4 = contadorDias3 - 0;
            location.href = "Colores/amarillo.html?presupuesto3=" + presupuesto3 + "&contadorDias=" + contadorDias4;
        }
    })
    
})