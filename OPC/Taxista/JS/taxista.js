//Caso #4

document.addEventListener("DOMContentLoaded", function () {
    let hablar = document.getElementById("hablar");

    hablar.addEventListener("click", function () {
        const urlParams = new URLSearchParams(window.location.search);

        let frase = "Taxi me puede llevar al hotel mariposas amarillas.";
        let regex = /[aeiou]/g;
        let fraseArreglada = frase.replace(regex, "i");

        let hablado = document.getElementById("hablado");

        let mensaje = "Has conseguido hablarle al taxista: " + fraseArreglada;
        
        hablado.textContent = mensaje;

        let botonNuevo = document.createElement("button");
        botonNuevo.innerHTML = "Continuar";
        document.body.appendChild(botonNuevo);
        botonNuevo.setAttribute("id", "continuar");

        botonNuevo.addEventListener("click", function(){
            const restante2 = urlParams.get("restante2");
            const presupuesto2 = urlParams.get("presupuesto2");
            if (restante2 !== null) {
                location.href = "../PPT/p_p_t.html?restante2=" + restante2;
            } else if (presupuesto2 !== null) {
                location.href = "../PPT/p_p_t.html?presupuesto2=" + presupuesto2;
            }
        })

    });
});