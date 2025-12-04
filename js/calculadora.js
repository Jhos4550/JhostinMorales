function sumar() {
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value
    let r = Number(a) + Number(b)
    document.getElementById("resultado").innerText = r
}

function restar() {
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value
    let r = Number(a) - Number(b)
    document.getElementById("resultado").innerText = r
}

function multiplicar() {
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value
    let r = Number(a) * Number(b)
    document.getElementById("resultado").innerText = r
}

function dividir() {
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value

    if (b == 0) {
        document.getElementById("resultado").innerText = "No se puede dividir entre cero"
    } else {
        let r = Number(a) / Number(b)
        document.getElementById("resultado").innerText = r
    }
}
