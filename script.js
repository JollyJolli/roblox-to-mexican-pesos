function calcularRobux() {
    var pesos = document.getElementById("pesos").value;
    var robux = pesos * 400 / 129;
    document.getElementById("resultado").innerHTML = pesos + " pesos son aproximadamente <strong>" + robux.toFixed(2) + "</strong> Robux. (<b>Esto es aproximado</b>)";
}

function calcularPesos() {
    var robux = document.getElementById("robux").value;
    var pesos = robux * 129 / 400;
    document.getElementById("resultado").innerHTML = robux + " Robux son aproximadamente <strong>" + pesos.toFixed(2) + "</strong> pesos. (<b>Esto es aproximado</b>)";
}
