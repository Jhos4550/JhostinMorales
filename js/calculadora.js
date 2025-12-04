document.getElementById("btnCalcular").addEventListener("click", function(){
    let a = parseFloat(document.getElementById("n1").value)
    let b = parseFloat(document.getElementById("n2").value)
    let op = document.getElementById("op").value
    let res = document.getElementById("res")

    if(isNaN(a) || isNaN(b)){
        res.textContent = "Ingrese numeros validos"
        return
    }

    function calcular(x, y, oper){
        switch(oper){
            case "suma":
                return x + y
            case "resta":
                return x - y
            case "multiplicacion":
                return x * y
            case "division":
                if(y == 0){
                    return "No se divide entre cero"
                }
                return x / y
            default:
                return "Operacion invalida"
        }
    }

    let final = calcular(a, b, op)
    res.textContent = "El resultado es: " + final
})
