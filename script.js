function calcularRobux() {
    var pesos = document.getElementById("pesos").value;
    var robux = pesos / 3.1;
    document.getElementById("resultado").innerHTML = pesos + " pesos son aproximadamente <strong>" + robux.toFixed(2) + "</strong> Robux.";
}

function calcularPesos() {
    var robux = document.getElementById("robux").value;
    var pesos = robux * 3.1;
    document.getElementById("resultado").innerHTML = robux + " Robux son aproximadamente <strong>" + pesos.toFixed(2) + "</strong> pesos.";
}
