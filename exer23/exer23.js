function calcular(){
    let angulo1 = Number(document.getElementById("angulo1").value)
    let angulo2 = Number(document.getElementById("angulo2").value)

    let angulo3 = 180 - (angulo1 + angulo2)

    resultado = angulo3


    document.getElementById("resultado").innerHTML = `O valor do terceiro ângulo é: ${resultado}.`    
}