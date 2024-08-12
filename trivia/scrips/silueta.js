const preguntas = [
    "adivina el personaje",
    "adivina el personaje",
    "adivina el personaje",
    "adivina el personaje",
    "adivina el personaje",

]

const opciones = [
    ['elsa', 'ana', 'ariel', 'mulan'],
    ['Aurora', 'Ariel', 'Bella', 'Tiana'],
    ['Nemo', 'Dory', 'Pluton','Flounder' ],
    ['Raily', 'Lilo', 'Rusell', 'Bu'],
    ['wody', 'miguel', 'wendy', 'bruno'],
]

const claves = [
    [5, 0, 0, 0],
    [0, 0, 5, 0],
    [5, 0, 0, 0],
    [0, 0, 0, 5],
    [5, 0, 0, 0]
]

const imagenes = [
    "elsa.jpg",
    "bella.jpg",
    "nemo.jpg", 
    "bu.jpg",
    "woo.jpg",
    
]

var i = 0;
var puntaje = 0;

function iniciarcronometro(){
    document.getElementById(pregunta).innerHTML=preguntas[i];
    document.getElementById(op1).innerHTML=opciones [0][0];
    document.getElementById(op2).innerHTML=opciones [0][1];
    document.getElementById(op3).innerHTML=opciones [0][2];
    document.getElementById(op4).innerHTML=opciones [0][3];
}
document.getElementById('op1').addEventListener("click", function () {
    actualizarpuntaje(0);
})

document.getElementById('op2').addEventListener("click", function () {
    actualizarpuntaje(1);
})

document.getElementById('op3').addEventListener("click", function () {
    actualizarpuntaje(2);
})

document.getElementById('op4').addEventListener("click", function () {
    actualizarpuntaje(3);
})


function mostrarpreguntas() {
    iniciarCronometro();
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0]
    document.getElementById("op2").innerHTML = opciones[i][1]
    document.getElementById("op3").innerHTML = opciones[i][2]
    document.getElementById("op4").innerHTML = opciones[i][3]

    document.getElementById("img").setAttribute("src", "multimedia/" + imagenes[i]);

}

function iniciarCronometro(){
    const duracion = 15;
    const cronometro = document.getElementById('cronometro');
    cronometro.textContent = "00:"+'15';
    checktiempo(duracion, cronometro);
}

function checktiempo(tiempo, elemento){
    intervalo= setInterval(function(){
        if(tiempo ==0){
            actualizarPuntaje();
        }else{
            tiempo = tiempo - 1;
            elemento.textContent = "00:"+tiempo;
        }
    }, 1000);
}

function actualizarPuntaje(valor){
    clearInterval(intervalo);
    if(valor){
        puntaje = parseInt(clave[i][valor]) + puntaje;
    }
    i=i+1;

    if(preguntas.length>i){
        mostrarpreguntas();
    }else{
        mostrarResultado();
    }
}


function actualizarpuntaje(valor) {
    clearInterval(intervalo);
    puntaje = parseInt(claves[i][valor])+ puntaje; //i :pregunta actual  valor:altenativa elegida

    i = i + 1;

    if (preguntas.length > i) {
        mostrarpreguntas()
    }

    else {
        localStorage.setItem("puntajet", puntaje)
        location.href="resultado.html"
    }
}



mostrarpreguntas()