document.addEventListener("DOMContentLoaded", function () {
    let contraseñaResuelta = document.getElementById('contraseñaResuelta');

    let contraseña = "01110010_01101001_01110111_01101001";
    let lista1 = contraseña.split("_");
    let lista2 = [];
    for (let corre of lista1) {
      let nuevaContra = parseInt(corre, 2);
      lista2.push(nuevaContra);
    }
    console.log(lista2);
    let caracteres = String.fromCharCode(...lista2);
    console.log(caracteres);
  
    let mensaje = "La contraseña es: " + caracteres + ". Ademas, se han restado 50mil a tu dinero.";
    contraseñaResuelta.textContent = mensaje;

    let contraConti = document.getElementById('contraConti');

    contraConti.addEventListener("click", function () {
      const urlParams = new URLSearchParams(window.location.search);
      const restante = urlParams.get("restante");
      const presupuesto = urlParams.get("presupuesto");
  
  if (restante !== null) {
      let restanteINT = parseInt(restante);
      let restante2 = restanteINT - 50000;
      location.href = "../Taxista/taxista.html?restante2=" + restante2;
  } else if (presupuesto !== null) {
      let presupuestoINT = parseInt(presupuesto);
      let presupuesto2 = presupuestoINT - 50000;
      location.href = "../Taxista/taxista.html?presupuesto2=" + presupuesto2;
  }
  });
  });