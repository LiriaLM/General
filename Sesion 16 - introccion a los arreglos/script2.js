//variables
const preguntas = ["¿con que frecuiencia reañizas deporte? <br> considera como deporte cualquier actividad que acelere tu ritmo cardiaco, andar en bicicleta, bailar o practicar deporte ",
    "¿como? <br>",
    "¿donde?",]

const opciones = [["3 o mas a la semana", "entre 1 y 2 a la semana", "menos de 4 veces al mes"],
["si", "no", "talvez"],
["si", "no", "talvez"]
]

const clave = [
    [5, 4, 3],
    [5, 4, 3],
    [5, 4, 3],
];

let i = 0;
let puntaje = 0;

//funciones
function mostrarPreguntas() {
   document.getElementById("pregunta").innerHTML= preguntas[0];
   document.getElementById(`op1`).innerHTML=opciones[0][0];
   document.getElementById(`op2`).innerHTML=opciones[0][1];
   document.getElementById(`op3`).innerHTML=opciones[0][2];

}
mostrarPreguntas();


console.log(preguntas[0])

console.log(opciones[0])
