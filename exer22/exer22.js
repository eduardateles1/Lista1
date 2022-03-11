function calcular(){
    let numerolado = Number(document.getElementById("numerolado").value)

    nd = numerolado * (numerolado - 3 ) / 2
    resultado = nd

    document.getElementById("resultado").innerHTML = 'O número de lados do polígono é = ' + resultado 
}