function calcular() {
 let salmin = parseInt(document.getElementById("salmin").value)
 let salario = parseInt(document.getElementById("salario").value)

 resultado = (salario / salmin)

 document.getElementById("resultado").innerHTML = "O resultado é = " + resultado
}