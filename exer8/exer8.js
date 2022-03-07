function calcular() {
    let quilograma = Number (document.getElementById("quilograma").value)

    resultado = quilograma * 1000

    document.getElementById("resultado").innerHTML = "o resultado em gramas é de  = " + resultado
}