
/*const frutas = ["manzana", "pera", "platano", "ciruela"];
//document.getElementById("frutas").innerHTML=frutas;

var texto = "";
for(let i=0; i<frutas.length;i++){
 texto += frutas[i]+ "<br>";
}
document.getElementById("frutas").innerHTML=texto;
*/
const numeros = [7, 8, 9, 4, 45, 99, 12];

var texto = "";
for(let i=0; i<numeros.length;i ++){
    if(numeros[i]%1==0){
    texto += numeros[i]+"<br>";
}
}
document.getElementById("frutas").innerHTML=texto;