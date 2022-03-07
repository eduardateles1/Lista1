function calcular() {
    let valor = Number(document.getElementById("valor").value)

    //processo
    resultado = valor + (valor * 0.1)

    //resultado
    document.getElementById("resultado").innerHTML = "o resultado é = " + resultado
}