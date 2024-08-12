var puntaje = localStorage.getItem("puntajet")

if(puntaje>20){ //si el puntaje es mayor a 20
    document.getElementById("resultado").innerHTML = "₊⊹ Tu puntaje es :"+ puntaje + " Felicitaciones!"
}
else if(puntaje>15 && puntaje<=20){
    document.getElementById("resultado").innerHTML = "₊⊹ Tu puntaje es :"+ puntaje + " bien hecho"
}
else if(puntaje>10 && puntaje<=15){
    document.getElementById("resultado").innerHTML = "₊⊹ Tu puntaje es :"+ puntaje + " nada mal"
}
else{
    document.getElementById("resultado").innerHTML = "₊⊹ Tu puntaje es :"+ puntaje + " ve más Disney!"
}



