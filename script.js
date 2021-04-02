function calcular () {
    var operação = document.getElementById('operações')
    var numero1 = document.getElementById('c1')
    var numero2 = document.getElementById('c2')
    var continha1 = Number(numero1.value) 
    var continha2 = Number(numero2.value)
    var adição = document.getElementById('adi')
    var subtração = document.getElementById('sub')
    var multiplicação = document.getElementById('mut')
    var divisão = document.getElementById('div')
    var resultado1 = document.getElementById('resultado')
    if (continha1 == 0 || continha2 == 0) {
        window.alert('[ERRO] Verifique!')
    } if (operação.value == adição.value) {
        valor = continha1 + continha2
        resultado1.innerHTML = `O resultado é igual há <strong>${valor}!</strong> <br>`
    } if (operação.value == subtração.value) {
        valor = continha1 - continha2
        resultado1.innerHTML = `O resultado é igual há <strong>${valor}!</strong> <br>`
    } if (operação.value == multiplicação.value) {
        valor = continha1 * continha2
        resultado1.innerHTML = `O resultado é igual há <strong>${valor}!</strong> <br>`
    } if (operação.value == divisão.value) {
        valor = continha1 / continha2
        resultado1.innerHTML = `O resultado é igual há <strong>${valor}!</strong> <br>`
    }
} 

function mudanca() {
    var operações = document.getElementById('operações')
    var resultado2 = document.getElementById('resultado1')
    if (operações.value == 0) {
    window.alert('[ERRO] Verifique!')
    } else {
        resultado2.innerHTML = `Você selecionou uma operação de <strong>${operações.value};</strong>`
    }

}