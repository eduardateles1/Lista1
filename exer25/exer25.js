function calcular(){
    let horas = Number(document.getElementById("horas").value)
    let minutos = Number(document.getElementById("minutos").value)

    let horasmin = horas * 60
    let minutostot = horasmin + minutos
    let segundos = minutostot * 60

    document.getElementById("resultado").innerHTML = `Conversão = Horas em Minutos = ${horasmin}, Total de Minutos = ${minutostot} e Total de Segundos = ${segundos}.`



}
