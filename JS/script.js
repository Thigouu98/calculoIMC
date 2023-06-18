let dados = document.querySelectorAll("input") // seleciona os dois inputs e coloca na variavel em forma de array
let result = document.getElementById("resultado")//valor imc
let bt = document.getElementById("botao")//botao
let texto = document.getElementById("texto")//informações
let info = document.getElementById("info")//tabela
let cont = document.getElementById("container")//selecionar o container

function calc() { //função para calcular o imc
    let altura = dados[0].value.replace(',', '.') //pega o valor do input altura e troca virgula por ponto
    let peso = dados[1].value.replace(',', '.')
    return peso / (altura * altura) // retorna o valor do imc
}

bt.addEventListener("click", function imc(e) {
    e.preventDefault();//não atualiza a pagina quando clicka no botao
    let imc = calc() // pega o valor do calculo e adiciona na variavel
    if (dados[0].value == "" || dados[1].value == "") {
        result.innerHTML = ""
        return false
    }
    else if (imc <= 18.5) {
        texto.innerHTML = "Abaixo do Peso"
        result.innerHTML = imc.toFixed(2).replace('.', ',') + " kg/m2"//joga o valor da variavel na div e troca ponto por virgula
        info.innerHTML = "De acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado para a sua altura."
        cont.style.background = "#83C635"
    }
    else if (imc > 18.5 && imc < 25) {
        texto.innerHTML = "Peso Normal"
        result.innerHTML = imc.toFixed(2).replace('.', ',') + " kg/m2"
        info.innerHTML = "De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura."
        cont.style.background = "#AFC60A"
    }
    else if (imc >= 25 && imc < 30) {
        texto.innerHTML = "Acima do Peso"
        result.innerHTML = imc.toFixed(2).replace('.', ',') + " kg/m2"
        info.innerHTML = "De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura."
        cont.style.background = "#B3CB0A"
    }
    else if (imc >= 30) {
        texto.innerHTML = "Obesidade"
        result.innerHTML = imc.toFixed(2).replace('.', ',') + " kg/m2"
        info.innerHTML = "De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura."
        cont.style.background = "#F57600"
    }
})