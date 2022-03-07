function calcular() {
    let  basemaior = Number(document.getElementById("basemaior").value)
    let basemenor = Number (document.getElementById("basemenor").value)
    let altura = Number (document.getElementById("altura").value)

    resultado = ((basemaior + basemenor) * altura / 2 )

    document.getElementById("resultado").innerHTML = "O resultado é igual a = " + resultado

}