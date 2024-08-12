const preguntas = ["🚀🐍🤠👨🥔 ",
    "🍝🍽️🐀🔪",
    "🧜🏻‍♀️🐙🐚🔱",
    "📔🌴🐻👦🏽",
    "🕯👨‍👩‍👧‍👦🏡👓",
]

const opciones = [
        ['Toy Story', 'Coco', 'Monsters,Inc', 'Winnie the Pooh'],
        ['Cenicienta', 'La dama y el vagabundo', 'Ratatouille', 'Tiana'],
        ['La sirenita', 'Buscanco a Nemo', 'Mohana', 'La bella y la bestia'],
        ['El libro de la vida', 'El libro de la selva', 'Descendientes', 'El rey león'],
        ['Soul', 'Intensamente', 'Up', 'Encanto'],
    
]

const claves = [
    [5, 0, 0, 0],
    [0, 0, 5, 0],
    [5, 0, 0, 0],
    [0, 5, 0, 0],
    [0, 0, 0, 5]
];

const imagenes = [
    "gus.png",
    "dory.png",
    "rata.png", 
    "olaf.png",
    "rati.png",
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


