function calcular() {
    
    let peso = parseInt(document.getElementById("peso").value)

    let emagrece = peso - (20 *peso)/100
    let engorda = peso + (15*peso)/100

    document.getElementById("emagrece").innerHTML = "O resultado se emagrece é = " + emagrece
    document.getElementById("engorda").innerHTML = "O resultado se engorda é = " + engorda
}