//Caso #2

console.log("Me parece que no necesito explicar el porqué lo dejé al final o directamente no lo hice.")

document.addEventListener("DOMContentLoaded", function () {
    let saltarFase = document.getElementById("saltarFase");

    saltarFase.addEventListener("click", function () {
        const urlParams = new URLSearchParams(window.location.search);
        const restante = urlParams.get("restante");
        const presupuesto = urlParams.get("presupuesto");

    if (restante !== null) {
        location.href = "../Internet/internet.html?restante=" + restante;
        console.log("No sabre hacer operaciones matemáticas, pero si se que existe una operación matemática que dice que así como existen los agujeros negros tambien existen los agujeros blancos, ¿la entiendo?, no, pero la comunidad cientifica dice que es verdad y yo le creo a esa gente (tengo una presentación de Powerpoint por si quieren escucharla *guiño* *guiño* *codo* *codo*")
    } else if (presupuesto !== null) {
        location.href = "../Internet/internet.html?presupuesto=" + presupuesto;
        console.log("No sabre hacer operaciones matemáticas, pero si se que existe una operación matemática que dice que así como existen los agujeros negros tambien existen los agujeros blancos, ¿la entiendo?, no, pero la comunidad cientifica dice que es verdad y yo le creo a esa gente (tengo una presentación de Powerpoint por si quieren escucharla *guiño* *guiño* *codo* *codo*");
    }
    });
});