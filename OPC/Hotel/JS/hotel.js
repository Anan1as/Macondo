document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const restante3 = urlParams.get("restante3");
    const presupuesto3 = urlParams.get("presupuesto3");
    let contadorDias = urlParams.get("contadorDias");

    let amarillo = document.getElementById("amarillo");
    let azul = document.getElementById("azul");
    let rojo = document.getElementById("rojo");
    let verde = document.getElementById("verde");
    let cuentaDias = 1;

    amarillo.addEventListener("click", function() {
        if (restante3 !== null) {
            let contadorDias = cuentaDias - 0;
            location.href = "Colores/amarillo.html?restante3=" + restante3 + "&contadorDias=" + contadorDias;
        } else if (presupuesto3 !== null) {
            let contadorDias = cuentaDias - 0;
            location.href = "Colores/amarillo.html?presupuesto3=" + presupuesto3 + "&contadorDias=" + contadorDias;
        }
    })
    
    azul.addEventListener("click", function(){
        if (restante3 !== null) {
            let contadorDias = cuentaDias - 0;
            location.href = "Colores/azul.html?restante3=" + restante3 + "&contadorDias=" + contadorDias;
        } else if (presupuesto3 !== null) {
            let contadorDias = cuentaDias - 0;
            location.href = "Colores/azul.html?presupuesto3=" + presupuesto3 + "&contadorDias=" + contadorDias;
        }
    })

    rojo.addEventListener("click", function(){
        if (restante3 !== null) {
            let contadorDias = cuentaDias - 0;
            location.href = "Colores/rojo.html?restante3=" + restante3 + "&contadorDias=" + contadorDias;
        } else if (presupuesto3 !== null) {
            let contadorDias = cuentaDias - 0;
            location.href = "Colores/rojo.html?presupuesto3=" + presupuesto3 + "&contadorDias=" + contadorDias;
        }
    })

    verde.addEventListener("click", function(){
        if (restante3 !== null) {
            let contadorDias = cuentaDias - 0;
            location.href = "Colores/verde.html?restante3=" + restante3 + "&contadorDias=" + contadorDias;
        } else if (presupuesto3 !== null) {
            let contadorDias = cuentaDias - 0;
            location.href = "Colores/verde.html?presupuesto3=" + presupuesto3 + "&contadorDias=" + contadorDias;
        }
    })
})