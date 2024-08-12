//Variables
var num1 = 4;
var num2 = 2;
var texto1 = `4`;
var num3= 8;
var nombre = "Ana";
//salidas
console.log(num2>num1);
console.log(num1==texto1);
console.log(num1===texto1);

//operadores logicos
//El num1 es mayor al num 2 o num 3 es menor a num1
 console.log(num1>num2 || num3<num1)

 //El num1 es mayor a num2 y num2 es mayor a num3
console.log(num1>num2 && num2>num3)

//Condicional
//si num1 es mayor a num2 "Maria gana el juego" 
//caso contrario "Juan gana el juego"
//si num3 es mayor a num1 "mario gana el juego"

if(num1>num2){
     console.log("Maria gana el juego")
}else if (num3>num2){
     console.log("Mario gana el juego")
}else{
     console.log("Juan gana el juego")
}

//si desayuné y me bañe puedo salir al cetpro si no, me quedo en mi casa
var desayune = true;
var bañe = true;
var nolohago =  4

if(desayune == true && bañe == true){
       console.log("Voy al cetpro")
}else{
       console.log("no voy al cetpro")
}

// si la primera letra es a entonces tu nombre inicia con a, si con b inicia con b, si no es ninguna, no se como inicia tu nombre
if (nombre[0]=="A"){
  console.log("inicia con A")
}else if(nombre[0]=="B"){
console.log("inicia con B")
}else{
    console.log("no se tu nombre")
}

