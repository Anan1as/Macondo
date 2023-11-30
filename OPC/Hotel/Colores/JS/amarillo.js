document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const restante3 = urlParams.get("restante3");
    const presupuesto3 = urlParams.get("presupuesto3");
    const contadorDias = urlParams.get("contadorDias");

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
            if (restante3 !== null) {
                location.href = "../../../finVacaciones.html?restante3=" + restante3 + "&contadorDias=" + contadorDias;
            } else if (presupuesto3 !== null) {
                location.href = "../../../finVacaciones.html?presupuesto3=" + presupuesto3 + "&contadorDias=" + contadorDias;
            }
        })
    })

    solecito.addEventListener("click", function() {
        let aviso = "Has decidido tomar el sol y pasarla bien, Hildebrando ha sobrevivido otro día :D";
        resultado.textContent = aviso;
    })
})