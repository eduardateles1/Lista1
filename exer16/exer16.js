function calcular(){
    let catetooposto = Number(document.getElementById("catetooposto").value)
    let catetoadjacente = Number(doucument.getElementById("catetoadjacente").value)

    let resultado1 = (catetoadjacente * catetoadjacente)
    let resultado2 = (catetooposto * catetooposto)
    let resultado3 = resultado1 + resultado2
    let hipotenusa = resultado3 ** (1/2) 

    let resultado = hipotenusa


    document.getElementById("resultado").innerHTML = `O valor da Hipotenusa é de ${resultado}`
}