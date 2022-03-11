function calcular(){
// Entrada de Dados
 let salario = Number(document.getElementById("salario").value)
 let conta1 = Number(document.getElementById("conta1").value)
 let conta2 = Number(document.getElementById("conta2").value)
    
// Processamento
let multa1 = conta1 * 2 / 100
let multa2 = conta2 * 2 / 100
    
let resultado = salario - (conta1 + multa1) - (conta2 + multa2)
    
// Saída
document.getElementById("resultado").innerHTML = `O valor total a ser pago é de R$ = ${resultado}`
        
}