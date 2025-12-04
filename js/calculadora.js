let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let resultado = document.getElementById("resultado")

document.getElementById("btnSumar").addEventListener("click", function() {
    let r = Number(num1.value) + Number(num2.value)
    resultado.innerText = r
})

document.getElementById("btnRestar").addEventListener("click", function() {
    let r = Number(num1.value) - Number(num2.value)
    resultado.innerText = r
})

document.getElementById("btnMultiplicar").addEventListener("click", function() {
    let r = Number(num1.value) * Number(num2.value)
    resultado.innerText = r
})

document.getElementById("btnDividir").addEventListener("click", function() {
    if (Number(num2.value) == 0) {
        resultado.innerText = "No se puede dividir entre cero"
    } else {
        let r = Number(num1.value) / Number(num2.value)
        resultado.innerText = r
    }
})
