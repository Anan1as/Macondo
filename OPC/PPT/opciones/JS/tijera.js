document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const restante2 = urlParams.get("restante2");
    const presupuesto2 = urlParams.get("presupuesto2");

    let resultado = document.getElementById("resultado");
    let continuar = document.getElementById("continuar");

    let eleccionTaxista = Math.floor(Math.random() * 3) + 1;
    console.log(eleccionTaxista)

    if (eleccionTaxista == 3) {
        let mensaje = "Ha sido un empate, no tienes que pagar."
        resultado.textContent = mensaje;

        continuar.addEventListener("click", function(){
            if (restante2 !== null) {
                let restante3 = restante2;
                location.href = "../../Hotel/hotel.html?restante3=" + restante3;
            } else if (presupuesto2 !== null) {
                let presupuesto3 = presupuesto2;
                location.href = "../../Hotel/hotel.html?presupuesto3=" + presupuesto3;
            }
        })

    } else if (eleccionTaxista == 1) {
        let mensaje = "Has ganado, no tienes que pagar."
        resultado.textContent = mensaje;

        continuar.addEventListener("click", function(){
            if (restante2 !== null) {
                let restante3 = restante2;
                location.href = "../../Hotel/hotel.html?restante3=" + restante3;
            } else if (presupuesto2 !== null) {
                let presupuesto3 = presupuesto2;
                location.href = "../../Hotel/hotel.html?presupuesto3=" + presupuesto3;
            }
        })
    } else if (eleccionTaxista == 2) {
        let mensaje = "Has perdido, pagas 300mil."
        resultado.textContent = mensaje;

        continuar.addEventListener("click", function(){
            if (restante2 !== null) {
                let restanteINT = parseInt(restante2);
                let restante3 = restanteINT - 300000;
                location.href = "../../Hotel/hotel.html?restante3=" + restante3;
            } else if (presupuesto2 !== null) {
                let presupuestoINT = parseInt(presupuesto2);
                let presupuesto3 = presupuestoINT - 300000;
                location.href = "../../Hotel/hotel.html?presupuesto3=" + presupuesto3;
            }
        })
    }
})