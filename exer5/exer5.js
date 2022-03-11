function calcular(){
let valor = Number(document.getElementById("valor").value)

resultado = valor - (valor * 0.1)

document.getElementById("resultado").innerHTML = 'O resultado é ' + resultado
}