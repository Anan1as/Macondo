document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const restante3 = urlParams.get("restante3");
    const presupuesto3 = urlParams.get("presupuesto3");
    const contadorDias = urlParams.get("contadorDias");
    const contadorDias2 = urlParams.get("contadorDias2");
    const contadorDias3 = urlParams.get("contadorDias3");
    const contadorDias4 = urlParams.get("contadorDias4");
    const contadorDias5 = urlParams.get("contadorDias5");

    let meterse = document.getElementById("meterse");
    let solecito = document.getElementById("solecito");
    let resultado = document.getElementById("resultado");

    meterse.addEventListener("click", function() {
        let aviso = "¡Oh no!, la piscina estaba demaciado llena de cloro, Hildebrando se ha ahogado y a muerto."
        resultado.textContent = aviso;

        let botonMuerte = document.createElement("button");
        botonMuerte.innerHTML = "Resultado";
        document.body.appendChild(botonMuerte);
        botonMuerte.setAttribute("id", "muerte");

        botonMuerte.addEventListener("click", function(){
            if ( contadorDias !== null ) {
                if (restante3 !== null) {
                    location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias=" + contadorDias;
                } else if (presupuesto3 !== null) {
                    location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias=" + contadorDias;
                }
            } else if ( contadorDias2 !== null ) {
                if (restante3 !== null) {
                    location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias2=" + contadorDias2;
                } else if (presupuesto3 !== null) {
                    location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias2=" + contadorDias2;
                }
            } else if ( contadorDias3 !== null ) {
                if (restante3 !== null) {
                    location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias3=" + contadorDias3;
                } else if (presupuesto3 !== null) {
                    location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias3=" + contadorDias3;
                }
            } else if ( contadorDias4 !== null ) {
                if (restante3 !== null) {
                    location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias4=" + contadorDias4;
                } else if (presupuesto3 !== null) {
                    location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias4=" + contadorDias4;
                }
            } else if ( contadorDias5 !== null ) {
                if (restante3 !== null) {
                    location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias5=" + contadorDias5;
                } else if (presupuesto3 !== null) {
                    location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias5=" + contadorDias5;
                }
            }
        })
    })

    solecito.addEventListener("click", function() {
        let aviso = "Has decidido tomar el sol y pasarla bien, Hildebrando ha sobrevivido otro día :D";
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
})