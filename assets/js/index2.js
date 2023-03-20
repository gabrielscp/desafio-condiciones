const in1 = document.querySelector(".in1")
const in2 = document.querySelector(".in2")
const in3 = document.querySelector(".in3")
const result = document.querySelector(".result")
const button = document.querySelector(".button")

button.addEventListener("click", function verSti(){
    const val1 = Number(in1.value)
    const val2 = Number(in2.value)
    const val3 = Number(in3.value)
    const total = (val1 + val2 + val3)

    if(total > 10){
        result.innerHTML = "Demasiados Sticker, retira algunos."
    }
    else if( total == 10){
        result.innerHTML = `haz alcanzado el máximo permitido, llevas ${total} Stickers`
    }
    else if (total >= 1){
        result.innerHTML = `Puedes agregar mas Stickers, llevas ${total}`
    }

    else{
        result.innerHTML = "No hay unidades agregadas"
    }
})
