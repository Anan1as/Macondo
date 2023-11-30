document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const restante3 = urlParams.get("restante3");
    const presupuesto3 = urlParams.get("presupuesto3");
    const contadorDias = urlParams.get("contadorDias");
    const contadorDias2 = urlParams.get("contadorDias2");
    const contadorDias3 = urlParams.get("contadorDias3");
    const contadorDias4 = urlParams.get("contadorDias4");
    const contadorDias5 = urlParams.get("contadorDias5");

    let bailar = document.getElementById("bailar");
    let casino = document.getElementById("casino");
    let bingo = document.getElementById("bingo");
    let resultado = document.getElementById("resultado");

    casino.addEventListener("click", function() {
        let aviso = "¡Oh no!, Hildebrando a apostado todo y a perdido, por desgracia solo tiene dinero para volver a casa."
        resultado.textContent = aviso;

        let botonMuerte = document.createElement("button");
        botonMuerte.innerHTML = "Resultado";
        document.body.appendChild(botonMuerte);
        botonMuerte.setAttribute("id", "muerte");

        botonMuerte.addEventListener("click", function(){
            if ( contadorDias !== null ) {
                if (restante3 !== null) {
                    let restante3 = "lo suficiente para el pasaje."
                    location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias=" + contadorDias;
                } else if (presupuesto3 !== null) {
                    let presupuesto3 = "lo suficiente para el pasaje."
                    location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias=" + contadorDias;
                }
            } else if ( contadorDias2 !== null ) {
                if (restante3 !== null) {
                    let restante3 = "lo suficiente para el pasaje."
                    location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias2=" + contadorDias2;
                } else if (presupuesto3 !== null) {
                    let presupuesto3 = "lo suficiente para el pasaje."
                    location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias2=" + contadorDias2;
                }
            } else if ( contadorDias3 !== null ) {
                if (restante3 !== null) {
                    let restante3 = "lo suficiente para el pasaje."
                    location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias3=" + contadorDias3;
                } else if (presupuesto3 !== null) {
                    let presupuesto3 = "lo suficiente para el pasaje."
                    location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias3=" + contadorDias3;
                }
            } else if ( contadorDias4 !== null ) {
                if (restante3 !== null) {
                    let restante3 = "lo suficiente para el pasaje."
                    location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias4=" + contadorDias4;
                } else if (presupuesto3 !== null) {
                    let presupuesto3 = "lo suficiente para el pasaje."
                    location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias4=" + contadorDias4;
                }
            } else if ( contadorDias5 !== null ) {
                if (restante3 !== null) {
                    let restante3 = "lo suficiente para el pasaje."
                    location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias5=" + contadorDias5;
                } else if (presupuesto3 !== null) {
                    let presupuesto3 = "lo suficiente para el pasaje."
                    location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias5=" + contadorDias5;
                }
            }
        })
    })

    bailar.addEventListener("click", function() {
        let aviso = "Hildebrando a sacado los prohibidos y se lo ha gozado bastante.";
        resultado.textContent = aviso;

        let botonVida = document.createElement("button");
        botonVida.innerHTML = "Continuar";
        document.body.appendChild(botonVida);
        botonVida.setAttribute("id", "vida");

        botonVida.addEventListener("click", function(){
            if ( contadorDias !== null ) {
                let contadorDiasINT = parseInt(contadorDias);
                let contadorDias2 = contadorDiasINT + 1;
                if(restante3 !== null) {
                    location.href = "../hotel2.html?restante3=" + restante3 + "&contadorDias2=" + contadorDias2;
                } else if (presupuesto3 !== null) {
                    location.href = "../hotel2.html?presupuesto3=" + presupuesto3 + "&contadorDias2=" + contadorDias2;
                }
            } else if ( contadorDias2 !== null ) {
                let contadorDias2INT = parseInt(contadorDias2);
                let contadorDias3 = contadorDias2INT + 1;
                if(restante3 !== null) {
                    location.href = "../hotel3.html?restante3=" + restante3 + "&contadorDias3=" + contadorDias3;
                } else if (presupuesto3 !== null) {
                    location.href = "../hotel3.html?presupuesto3=" + presupuesto3 + "&contadorDias3=" + contadorDias3;
                }
            } else if ( contadorDias3 !== null ) {
                let contadorDias3INT = parseInt(contadorDias3);
                let contadorDias4 = contadorDias3INT + 1;
                if(restante3 !== null) {
                    location.href = "../hotel4.html?restante3=" + restante3 + "&contadorDias4=" + contadorDias4;
                } else if (presupuesto3 !== null) {
                    location.href = "../hotel4.html?presupuesto3=" + presupuesto3 + "&contadorDias4=" + contadorDias4;
                }
            } else if ( contadorDias4 !== null ) {
                if (restante3 !== null) {
                    location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias4=" + contadorDias4;
                } else if (presupuesto3 !== null) {
                    location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias4=" + contadorDias4;
                }
            }
        })
    })

    bingo.addEventListener("click", function() {
        let aviso = "Hildebrando a tenido suerte y a ganado el bingo, consiguió 50mil pesos más.";
        resultado.textContent = aviso;

        let botonVida = document.createElement("button");
        botonVida.innerHTML = "Continuar";
        document.body.appendChild(botonVida);
        botonVida.setAttribute("id", "vida");

        botonVida.addEventListener("click", function(){
            if ( contadorDias !== null ) {
                let contadorDiasINT = parseInt(contadorDias);
                let contadorDias2 = contadorDiasINT + 1;
                if(restante3 !== null) {
                    let restante3INT = parseInt(restante3);
                    let restante4 = restante3INT + 50000;
                    location.href = "../hotel2.html?restante4=" + restante4 + "&contadorDias2=" + contadorDias2;
                } else if (presupuesto3 !== null) {
                    let presupuesto3INT = parseInt(presupuesto3);
                    let presupuesto4 = presupuesto3INT + 50000;
                    location.href = "../hotel2.html?presupuesto4=" + presupuesto4 + "&contadorDias2=" + contadorDias2;
                }
            } else if ( contadorDias2 !== null ) {
                let contadorDias2INT = parseInt(contadorDias2);
                let contadorDias3 = contadorDias2INT + 1;
                if(restante3 !== null) {
                    let restante3INT = parseInt(restante3);
                    let restante4 = restante3INT + 50000;
                    location.href = "../hotel3.html?restante4=" + restante4 + "&contadorDias3=" + contadorDias3;
                } else if (presupuesto3 !== null) {
                    let presupuesto3INT = parseInt(presupuesto3);
                    let presupuesto4 = presupuesto3INT + 50000;
                    location.href = "../hotel3.html?presupuesto4=" + presupuesto4 + "&contadorDias3=" + contadorDias3;
                }
            } else if ( contadorDias3 !== null ) {
                let contadorDias3INT = parseInt(contadorDias3);
                let contadorDias4 = contadorDias3INT + 1;
                if(restante3 !== null) {
                    let restante3INT = parseInt(restante3);
                    let restante4 = restante3INT + 50000;
                    location.href = "../hotel4.html?restante4=" + restante4 + "&contadorDias4=" + contadorDias4;
                } else if (presupuesto3 !== null) {
                    let presupuesto3INT = parseInt(presupuesto3);
                    let presupuesto4 = presupuesto3INT + 50000;
                    location.href = "../hotel4.html?presupuesto4=" + presupuesto4 + "&contadorDias4=" + contadorDias4;
                }
            } else if ( contadorDias4 !== null ) {
                if (restante3 !== null) {
                    let restante3INT = parseInt(restante3);
                    let restante4 = restante3INT + 50000;
                    location.href = "../../../finVacaciones.html?restante4=" + restante4 + "&contadorDias4=" + contadorDias4;
                } else if (presupuesto3 !== null) {
                    let presupuesto3INT = parseInt(presupuesto3);
                    let presupuesto4 = presupuesto3INT + 50000;
                    location.href = "../../../finVacaciones.html?presupuesto4=" + presupuesto4 + "&contadorDias4=" + contadorDias4;
                }
            }
        })
    })
})