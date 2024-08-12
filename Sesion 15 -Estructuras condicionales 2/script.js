//variables 
var clima = "soleado";
var fruta = "manzana";
var diasemana = "martes";

//Estructura Switch case

switch (clima) {
    case `lluvioso`:
        console.log("Recuerda llevar un paraguas");
        break;
    case `soleado`:
        console.log("Puedes salir con ropa ligera");
        break;
    case `nublado`:
        console.log("Puedes salir a la calle")
        break;
    default:
        console.log("clima desconocido");
        break;

}

//si la fruta es manzana el precio sera 5
// si es platano sera 2
//si es mango sera 4
//si es otra, no se tiene

switch (fruta) {
    case `manzana`:
        console.log("Cuesta 5 soles");
        break;
    case `palatano`:
        console.log("Cuesta 2 soles");
        break;
    case `mango`:
        console.log("Cuesta 4 soles");
        break;
    default:
        console.log("no se tiene la fruta")
        break;

}

switch (diasemana) {
    case `lunes`:
        console.log("hoy es lunes");
        break;
    case `martes`:
        console.log("hoy es martes");
        break;
    case `miercoles`:
        console.log("hoy es miercoles");
        break;
    case `jueves`:
        console.log("hoy es jueves ");
        break;
    case `viernes`:
        console.log("hoy es viernes");
        break;
    case `sabado`:
        console.log("hoy es sabado");
        break;
    case `domingo`:
        console.log("hoy es domingo");
        break;
    default:
        console.log("no se que dia es")
        break;


}