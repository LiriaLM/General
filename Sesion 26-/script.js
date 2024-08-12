/*ejercicio 1
//imprimir los numeros del 0 al 5
var numero =1;

while(numero <=12 ){
   
    document.getElementById("resultado").innerHTML += numero + "<br>";
    numero = numero +2;
     
}



const paises =[`perú`, `uruguay`, `chile`]
let i=0
while(i < paises.length ){
    document.getElementById("resultado").innerHTML += paises[0] + "<br>";
    i = i+1
}*/


//Mostrar prompt para capturar nombre

function nombre(){

    var i=0
    while(i<=4) {
     var nombre = prompt("cual es tu nombre?") 
     document.getElementById("resultado").innerHTML +=nombre + "<br>";
      i = i+1;
     
    }
    
}

