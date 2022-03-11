function calcular(){
 let nota1 = Number (document.getElementById("nota1").value)
 let nota2 = Number (document.getElementById("nota2").value)

 resultado = (nota1 * nota2 * 3) / (2+3)

 document.getElementById("resultado").innerText = "O resultado é" = + resultado

}