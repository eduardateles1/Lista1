function calcular(){
    let raio = Number(document.getElementById("raio").value)
    let pi=3.14, comprimentoCir, areaCir, diametro;

    comprimentoCir = 2*pi*raio;
    areaCir  = pi* raio*raio;
    diametro = 2*raio;

    let resultado = comprimentoCir
    let resultado1 = areaCir
    let resultado2 = diametro

    document.getElementById("resultado").innerHTML = `O valor do Comprimento é de ${resultado}`
    document.getElementById("resultado1").innerHTML = `O valor da Área é de ${resultado1}`
    document.getElementById("resultado2").innerHTML = `O valor do Diâmetro é de ${resultado2}`


}