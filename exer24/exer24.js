function calcular(){
    let dinheiro = Number(document.getElementById("dinheiro").value)

    let dolar = dinheiro * 5.01
    let marcoalemao = dinheiro * 2
    let libraesterlina = dinheiro * 3.57

    document.getElementById("resultado").innerHTML = `Conversão = Dólar = R$${dolar}, Marco Alemão = R$${marcoalemao} e Libra Esterlina = R$${libraesterlina}.`  
}


