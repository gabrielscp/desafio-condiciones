const num1 = document.querySelector("#sel-1")
const num2 = document.querySelector("#sel-2")
const num3 = document.querySelector("#sel-3")
const estado = document.querySelector("#estado")
const enter = document.querySelector("#enter")

enter.addEventListener("click", function verifyPassword() {
    const a = num1.value
    const b = num2.value
    const c = num3.value
    const password = a + b + c

    if (a == 9 && b == 1 && c == 1) {
        estado.innerHTML = "Hurra Password 1 correcto "
        
    } else if (a == 7 && b == 1 && c == 4) {
        estado.innerHTML = "Hurra Password 2 correcto "
        
    } else {
        estado.innerHTML = "Buu Password incorrecto "
        
    }
})