function calcular() {
    let celcius = Number(document.getElementById("celcius").value)

    let fahrenheit = ((celcius * 1.8) + 32)
    let resultado = fahrenheit

    document.getElementById("resultado").innerHTML = 'A temperatura em Fahrenheit é de ' + resultado
}