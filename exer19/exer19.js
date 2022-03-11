function calcular(){
    let quarto1 = Number(document.getElementById("quarto1").value)
    let quarto2 = Number(document.getElementById("quarto2").value)


    area = quarto1 * quarto2

    potenciaW = area * 18

    resultado = potenciaW

    document.getElementById("resultado").innerHTML = `A área total em m² é de: ${area} m²`    

    document.getElementById("resultado1").innerHTML = `A potência de iluminação que deverá ser utilizada é de ${resultado} W`    
}