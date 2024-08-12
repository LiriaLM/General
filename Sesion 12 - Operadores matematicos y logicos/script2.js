//Variables
var edad_juan = 18;
var ingresos_juan = 4000;
var edad_maria = 20;
var ingresos_maria = 5000;

//Comparaciones
console.log("La edad de Juan es: " + edad_juan);
console.log("Los ingresos de Juan son " + ingresos_juan);
console.log("La edad de Maria es " + edad_maria);
console.log("Los ingresos de Maria son " + ingresos_maria);

//condiciones
console.log("Juan es mayor que maria y gana mas " + (edad_juan > edad_maria && ingresos_juan > ingresos_maria))
console.log("Maria es mayor que Juan y Juan gana mas que Maria: " + (edad_maria > edad_juan || ingresos_juan > ingresos_maria))
console.log("No es verdad que Maria gane menos: " + (!ingresos_maria < ingresos_juan))


