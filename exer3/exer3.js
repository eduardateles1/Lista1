function calcular() {
let numero1 = parseInt(document.getElementById("numero1").value)
let numero2 = parseInt (document.getElementById("numero2").value)
 
if (numero2 == 0) {
    document.getElementById("resultado").innerHTML = " Digite um número maior que zero"
}
   else {
       let resultado = numero1 / numero2
       document.getElementById("resultado").innerText = " o resultado é = " + resultado
   }
}