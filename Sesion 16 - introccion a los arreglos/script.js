//variables
const diasemana=["Lunes", "martes","miercoles","jueves","viernes",];
const frutas=["manzana","platano","pera","uva","ciruela"];



//funciones

document.getElementById(`mostrar`).addEventListener("click",function mostrar(){
    //salida en documento
document.getElementById("arreglo1").innerHTML= diasemana;
document.getElementById("valor1").innerHTML= diasemana[3];

document.getElementById("frutas").innerHTML= frutas;

//longitud del arreglo frutas
document.getElementById("longitudfrutas").innerHTML=`hay `+frutas.length+` frutas`;

} )


