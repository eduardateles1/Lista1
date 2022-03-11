function calcular(){
    let angulo = Number(document.getElementById("angulo").value)
    let distancia = Number(document.getElementById("distancia").value)

    let hipotenusa = distancia / Math.cos(angulo)
    

    document.getElementById("resultado").innerHTML = `A medida da escada é de: ${hipotenusa}`
}