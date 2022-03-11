function calcular(){
    let salario = Number(document.getElementById("salario").value)
    let horatrabalhada = Number(document.getElementById("horatrabalhada").value)
    let horaextra = Number(document.getElementById("horaextra").value)

    valorhoratrabalhada = (salario / 8)
    valorhoraextra= (salario / 4)

    aReceberhextra = horaextra * valorhoraextra
    aReceberhtrabalhadas = horatrabalhada * valorhoratrabalhada

    resultado = aReceberHtrabalhadas + aReceberhextra


    document.getElementById("resultado").innerHTML = `O valor total a receber é de: ${resultado} `    
}