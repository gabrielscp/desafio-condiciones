foto = document.querySelector(".foto");

foto.addEventListener("click", function border(){
    if (foto.style.border == ""){
        foto.style.border = "solid 2px red"
    }
    else{
        foto.style.border = ""
    }
})