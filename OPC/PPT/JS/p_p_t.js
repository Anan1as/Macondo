//Caso #5

document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const restante2 = urlParams.get("restante2");
    const presupuesto2 = urlParams.get("presupuesto2");

    let papel = document.getElementById("papel");
    let piedra = document.getElementById("piedra");
    let tijera = document.getElementById("tijera");

    papel.addEventListener("click", function() {
        if (restante2 !== null) {
            location.href = "../PPT/opciones/papel.html?restante2=" + restante2;
        } else if (presupuesto2 !== null) {
            location.href = "../PPT/opciones/papel.html?presupuesto2=" + presupuesto2;
        }
    })

    piedra.addEventListener("click", function() {
        if (restante2 !== null) {
            location.href = "../PPT/opciones/piedra.html?restante2=" + restante2;
        } else if (presupuesto2 !== null) {
            location.href = "../PPT/opciones/piedra.html?presupuesto2=" + presupuesto2;
        }
    })

    tijera.addEventListener("click", function() {
        if (restante2 !== null) {
            location.href = "../PPT/opciones/tijera.html?restante2=" + restante2;
        } else if (presupuesto2 !== null) {
            location.href = "../PPT/opciones/tijera.html?presupuesto2=" + presupuesto2;
        }
    })
})