function calcular() {
    let anonasc = Number(document.getElementById("anonasc").value)
    let anoatual = Number(document.getElementById("anoatual").value)

    let idadeAnos = anoatual - anonasc
    let idadeMeses = idadeAnos * 12
    let idadeSemanas = idadeAnos * 52
    let idadeDias = idadeAnos * 365

    document.getElementById("resultado").innerHTML = `Idade em Anos = ${idadeAnos} " <br/> ", Meses = ${idadeMeses} "<br/> ", Semanas = ${idadeSemanas} "<br/> " e Dias = ${idadeDias} "<br/> " `
} 