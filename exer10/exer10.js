function calcular() {
    var lateral = Number(document.getElementById('lateral').value)

    resultado = (lateral * lateral)

    document.getElementById("resultado").innerHTML =  "O resultado é = " + resultado
}