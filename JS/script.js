//Caso #1
let salario = 2500000;

document.addEventListener("DOMContentLoaded", function() {
    let comida1 = document.getElementById('comida1');
    let comida2 = document.getElementById('comida2');
    let comida3 = document.getElementById('comida3');

    function eleccion1() {
        let restante = salario - 15000;
        location.href = "./OPC/Comidas/Comida1.html?restante=" + restante;
    }

    function eleccion2() {
        let restante = salario - 23000;
        location.href = "./OPC/Comidas/Comida2.html?restante=" + restante;
    }

    function eleccion3() {
        let presupuesto = salario - 0;
        location.href = "./OPC/Comidas/Comida3.html?presupuesto=" + presupuesto;
    }

    comida1.addEventListener("click", eleccion1);
    comida2.addEventListener("click", eleccion2);
    comida3.addEventListener("click", eleccion3);
});
