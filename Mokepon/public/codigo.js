// Variables globales
//Variables de la función (iniciarJuego)

const seleccionAtaque = document.getElementById('seleccion-ataque'); // Obtener la sección de seleccionar ataque
const seccionMensajes = document.getElementById('resultados'); 
const seccionReinicio = document.getElementById('btn-reinicio');
const btnMascota = document.getElementById("btn-mascota"); // Obtener el botón de seleccionar mascota
const btnReiniciar = document.getElementById('btn-reinicio'); // Obtener el botón de reiniciar

//Variables de la función (seleccionarMascota)

const seleccionMascota = document.getElementById('seleccion-mascota'); // Obtener la sección de seleccionar mascota
const mascotaJugador = document.getElementById('mascota-jugador'); // Obtener el span para mostrar la mascota del jugador
const jugar = true; // Variable para controlar si se ha seleccionado una mascota

//Variables de la función (seleccionarMascotaEnemigo)

const mascotaEnemigo = document.getElementById('mascota-enemigo'); // Obtener el span para mostrar la mascota del enemigo

//Variables de la función (combate)

const spanVidasJugador = document.getElementById('vida-jugador'); // Obtener el span de la vida del jugador
const spanVidasEnemigo = document.getElementById('vida-enemigo'); // Obtener el span de la vida del enemigo

//Variables de la función (crearMensaje)

const sectionResultados = document.getElementById('mensajes'); // Obtener la sección de resultados
const ataquesJugador = document.getElementById('ataques-jugador');
const ataquesEnemigo = document.getElementById('ataques-enemigo');

const contenedorCards = document.getElementById('contenedor-cards');
const contenedorAtaques = document.getElementById('contenedor-ataques');

//Canvas

const sectionVerMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa');
const anchoMaxMapa = 650

//Ataques

const hipodoge_ataques = [
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '🌱', id: 'btn-tierra'}
]

const capipepo_ataques = [
    {nombre: '🌱', id: 'btn-tierra'},
    {nombre: '🌱', id: 'btn-tierra'},
    {nombre: '🌱', id: 'btn-tierra'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '💧', id: 'btn-agua'}
]

const ratipot_ataques = [
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🌱', id: 'btn-tierra'}
]

const langostel_ataques = [
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🌱', id: 'btn-tierra'}
]

const tucapalma_ataques = [
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🌱', id: 'btn-tierra'},
    {nombre: '🌱', id: 'btn-tierra'},
    {nombre: '🔥', id: 'btn-fuego'}
]

const pydos_ataques = [
    {nombre: '🌱', id: 'btn-tierra'},
    {nombre: '🌱', id: 'btn-tierra'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '💧', id: 'btn-agua'}
]

//Arrays

let mokepones = [];
let botones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let mokeponesEnemigos = [];

let jugadorId = null;
let enemigoId = null;
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatipot;
let inputLangostel;
let inputTucapalma;
let inputPydos;
let mokeponJugador;
let mokeponObjeto;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let btnFuego;
let btnAgua;
let btnTierra;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let lienzo = mapa.getContext('2d');
let intervalo;
let mapaBackgroud = new Image();
mapaBackgroud.src = './Imgs/mapa.png';
let alturaMapa;
let anchoMapa = window.innerWidth - 25;

if (anchoMapa > anchoMaxMapa){
    anchoMapa = anchoMaxMapa - 25;
}

alturaMapa = anchoMapa * 600 / 800;

mapa.width = anchoMapa;
mapa.height = alturaMapa;


//Clases

class Mokepon {
    constructor(nombre, img, vida, imgMapa, x = aleatorio(50, 595), y = aleatorio(50, 395), id = null){
        this.nombre = nombre; //"This" significa "esta clase" sera el nombre de los objetos que se creen
        this.img = img;
        this.vida = vida;
        this.ataques = [];
        this.ancho = 50
        this.alto = 50
        this.x = x
        this.y = y
        this.mapaImg = new Image()
        this.mapaImg.src = imgMapa
        this.velocidadX = 0
        this.velocidadY = 0
        this.id = id
    }

    pintarMokepon() {
        lienzo.drawImage(this.mapaImg, this.x, this.y, this.ancho, this.alto);
    }
}

let hipodoge = new Mokepon('Hipodoge', './Imgs/mokepons_hipodoge.png', 3, './Imgs/hipodoge.png', 295, 15);
let capipepo = new Mokepon('Capipepo', './Imgs/mokepons_capipepo.png', 3, './Imgs/capipepo.png', 295, 15);
let ratipot = new Mokepon('Ratipot', './Imgs/mokepons_ratipot.png', 3, './Imgs/ratipot.png', 295, 15);
let langostel = new Mokepon('Langostel', './Imgs/mokepons_langostel.png', 3, './Imgs/mokepons_langostel.png', 295, 15);
let tucapalma = new Mokepon('Tucapalma', './Imgs/Tucapalma.png', 3, './Imgs/Tucapalma.png', 295, 15);
let pydos = new Mokepon('Pydos', './Imgs/Pydos.png', 3, './Imgs/Pydos.png', 295, 15);

hipodoge.ataques.push(...hipodoge_ataques);

capipepo.ataques.push(...capipepo_ataques);

ratipot.ataques.push(...ratipot_ataques);

langostel.ataques.push(...langostel_ataques);

tucapalma.ataques.push(...tucapalma_ataques);

pydos.ataques.push(...pydos_ataques);

mokepones.push(hipodoge, capipepo, ratipot, langostel, tucapalma, pydos);


function iniciarJuego() { // Función para iniciar el juego
    seleccionAtaque.style.display = 'none'; // Ocultar la sección de seleccionar ataque al iniciar el juego
    seccionMensajes.style.display = 'none';
    seccionReinicio.style.display = 'none';
    sectionVerMapa.style.display = 'none';

    mokepones.forEach((mokepon) => { // Recorrer el array de mokepones
        opcionDeMokepones = `
        <input type="radio" name="Mokepon" id=${mokepon.nombre} class="oculto">
        <label class="card-mokepon" for=${mokepon.nombre}>
            <img src=${mokepon.img} alt=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
        </label>
        `;

        contenedorCards.innerHTML += opcionDeMokepones; // Agregar las opciones de mokepones al contenedor

        inputHipodoge = document.getElementById('Hipodoge');
        inputCapipepo = document.getElementById('Capipepo');
        inputRatipot = document.getElementById('Ratipot');
        inputLangostel = document.getElementById('Langostel');
        inputTucapalma = document.getElementById('Tucapalma');
        inputPydos = document.getElementById('Pydos');
    
    });

    btnMascota.addEventListener('click', seleccionarMascota); // Agregar evento al botón para seleccionar mascota
    btnReiniciar.addEventListener('click', reiniciarJuego); // Agregar evento al botón para reiniciar el juego

    unirseAlJuego();
}

function unirseAlJuego() {
    fetch('/unirse')//Petición asincrona, ya que no se sabe cuanto tiempo tardará el server en responder
        .then(function (res){
            if(res.ok){
                res.text()
                    .then(function (respuesta){
                        jugadorId = respuesta;
                    });
            }
        });
}

function seleccionarMascota() { // Función para seleccionar mascota
    if (inputHipodoge.checked) { // Si Hipodoge está seleccionado
        mascotaJugador.innerHTML = "Tu Mokepon: "+inputHipodoge.id;
        mokeponJugador = inputHipodoge.id;

    } else if (inputCapipepo.checked) { // Si Capipepo está seleccionado
        mascotaJugador.innerHTML = "Tu Mokepon: "+inputCapipepo.id;
        mokeponJugador = inputCapipepo.id;

    } else if (inputRatipot.checked) { // Si Ratipot está seleccionado
        mascotaJugador.innerHTML = "Tu Mokepon: "+inputRatipot.id;
        mokeponJugador = inputRatipot.id;

    } else if (inputLangostel.checked) { // Si Langostel está se leccionado
        mascotaJugador.innerHTML = "Tu Mokepon: "+inputLangostel.id;
        mokeponJugador = inputLangostel.id;

    } else if (inputTucapalma.checked) { // Si Tucapalma está seleccionado
        mascotaJugador.innerHTML = "Tu Mokepon: "+inputTucapalma.id;
        mokeponJugador = inputTucapalma.id;

    } else if (inputPydos.checked) { // Si Pydos está seleccionado
        mascotaJugador.innerHTML = "Tu Mokepon: "+inputPydos.id;
        mokeponJugador = inputPydos.id;

    } else { // Si no se ha seleccionado ninguna mascota
        alert("¡Selecciona un Mokepon para continuar!") // Mostrar alerta de que no se ha seleccionado ninguna mascota
        return;
    }

    seleccionarMokepon(mokeponJugador); // Llamar a la función para seleccionar mokepon)

    seleccionMascota.style.display = 'none'; // Ocultar la sección de seleccionar mascota al iniciar el juego
    seccionMensajes.style.display = 'block';

    extraerAtaques(mokeponJugador)
    sectionVerMapa.style.display = 'flex';
    iniciarMapa();
}

function seleccionarMokepon(mokeponJugador) {
    fetch(`/mokepon/${jugadorId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mokepon: mokeponJugador
        })
    })
}   

function extraerAtaques(mokeponJugador) { // Función para extraer los ataques del mokepon seleccionado
    let ataques;
    for(let i = 0; i < mokepones.length; i++) {
        if(mokeponJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques;
        }
    }
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) { // Función para mostrar los ataques del mokepon seleccionado
    contenedorAtaques.innerHTML = '';
    ataques.forEach((ataque) => {
        ataquesMokepon = `<button id=${ataque.id} class="btn-ataque BAtaque">${ataque.nombre}</button>`;
        contenedorAtaques.innerHTML += ataquesMokepon;
    });

    botones = document.querySelectorAll('.BAtaque');
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fuego');
                boton.disabled = true;
            }else if (e.target.textContent === '💧') {
                ataqueJugador.push('Agua');
                boton.disabled = true;
            }else {
                ataqueJugador.push('Tierra');
                boton.disabled = true;
            }
            if(ataqueJugador.length === 5){
                enviarAtaque()
            }
        });
    });
}

function enviarAtaque() {
    fetch(`/mokepon/${jugadorId}/ataque`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataque: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaque, 50);
}

function obtenerAtaque() {
    fetch(`/mokepon/${enemigoId}/ataque`)
        .then(function (res) {
            if (res.ok) {
                res.json()
                .then(function ({ataque}) {
                    if (ataque.length === 5) {
                        ataqueEnemigo = ataque;
                        clearInterval(intervalo);
                        combate();
                    }   
                })
            }
        })
}

function seleccionarMascotaEnemigo(enemigo) { // Función para seleccionar la mascota del enemigo
    mascotaEnemigo.innerHTML = enemigo.nombre;
    alert("¡Preparate para pelear contra " +enemigo.nombre+ "!"); // Mostrar alerta de selección
    mascotaEnemigo.innerHTML = "Mokepon Enemigo: " + enemigo.nombre;
    ataquesMokeponEnemigo = enemigo.ataques;
    secuenciaAtaque();
}

function ataqueAleatorioEnemigo() { // Función para ataque aleatorio del enemigo
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1);

    if (ataquesMokeponEnemigo[ataqueAleatorio].nombre === '🔥') {
        ataqueEnemigo.push('Fuego');
    } else if (ataquesMokeponEnemigo[ataqueAleatorio].nombre === '💧') {
        ataqueEnemigo.push('Agua');
    } else {
        ataqueEnemigo.push('Tierra');
    }
    iniciarPelea();
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate();
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
    clearInterval(intervalo);

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index); 
            crearMensaje();
        } else if ((ataqueJugador[index] == "Fuego" && ataqueEnemigo[index] == "Tierra") || (ataqueJugador[index] == "Agua" && ataqueEnemigo[index] == "Fuego") || (ataqueJugador[index] == "Tierra" && ataqueEnemigo[index] == "Agua")) {
            indexAmbosOponentes(index, index);
            crearMensaje();
            victoriasJugador++;
            spanVidasJugador.innerHTML = "Victorias: "+victoriasJugador;
        } else {
            indexAmbosOponentes(index, index);
            crearMensaje();
            victoriasEnemigo++;
            spanVidasEnemigo.innerHTML = "Victorias: "+victoriasEnemigo;
        }
    }   
    revisarVidas(); // Llamar a la función para revisar las vidas
}

function revisarVidas() { // Función para revisar las vidas
    if (victoriasJugador == victoriasEnemigo) {
        mensajeFinal("¡EL ENEMIGO Y TU HAN EMPATADO!");
    } else if (victoriasJugador > victoriasEnemigo) {
        mensajeFinal("¡FELICIDADES! ¡HAS GANADO! El Mokepon enemigo ha sido derrotado.");
    } else {
        mensajeFinal("¡LO SIENTO! ¡HAS PERDIDO! Tu Mokepon ha sido derrotado.");
    }
}

function crearMensaje(resultado) { // Función para crear el mensaje del combate 
    let nuevoAtaqueJugador = document.createElement('p'); // Crear un párrafo para el ataque del jugador
    let nuevoAtaqueEnemigo = document.createElement('p'); // Crear un párrafo para el ataque del enemigo

    sectionResultados.innerHTML = resultado; // Crear el mensaje de notificación
    nuevoAtaqueJugador.innerHTML = "Tu Mokepon atacó con " + indexAtaqueJugador; // Crear el mensaje del ataque del jugador
    nuevoAtaqueEnemigo.innerHTML = "El Mokepon enemigo atacó con " + indexAtaqueEnemigo;

    ataquesJugador.appendChild(nuevoAtaqueJugador); // Agregar el párrafo a la sección de resultados
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo); // Agregar el párrafo a la sección de resultados
}

function mensajeFinal(resultadoFinal) { // Función para mostrar el mensaje final del juego
    sectionResultados.innerHTML = resultadoFinal; // Crear el mensaje final

    seccionReinicio.style.display = 'block';
}

function reiniciarJuego() {
    location.reload(); // Recargar la página para reiniciar el juego
}

function aleatorio(min, max) { // Función para generar un número aleatorio entre min y max
    return Math.floor(Math.random() * (max - min + 1) + min); // Retorna el número aleatorio
}

function pintarCanvas() {
    mokeponObjeto.x = mokeponObjeto.x + mokeponObjeto.velocidadX;
    mokeponObjeto.y = mokeponObjeto.y + mokeponObjeto.velocidadY;

    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(mapaBackgroud, 0, 0, mapa.width, mapa.height);
    
    mokeponObjeto.pintarMokepon();

    enviarPosicion(mokeponObjeto.x, mokeponObjeto.y);

    mokeponesEnemigos.forEach(function (mokepon) {
        if(mokepon != undefined) {
            mokepon.pintarMokepon();
            revisarColision(mokepon); 
        }
    });
}

function enviarPosicion(x, y) {
    fetch(`/mokepon/${jugadorId}/posicion`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            x, y
        })
    })
    .then(function (res) {
        if (res.ok) {
            res.json()
            .then(function ({enemigos}) {
                mokeponesEnemigos = enemigos.map(function (enemigo) {
                    let mokeponEnemigo = null;
                    
                    if(enemigo.mokepon != undefined) {
                        const mokeponNombre = enemigo.mokepon.nombre || "";

                        if (mokeponNombre === "Hipodoge") {
                            mokeponEnemigo = new Mokepon('Hipodoge', './Imgs/mokepons_hipodoge.png', 5, './Imgs/hipodoge.png', enemigo.x, enemigo.y, enemigo.id);
                        } else if (mokeponNombre === "Capipepo") {
                            mokeponEnemigo = new Mokepon('Capipepo', './Imgs/mokepons_capipepo.png', 5, './Imgs/capipepo.png', enemigo.x, enemigo.y, enemigo.id);
                        } else if (mokeponNombre === "Ratipot") {
                            mokeponEnemigo = new Mokepon('Ratipot', './Imgs/mokepons_ratipot.png', 5, './Imgs/ratipot.png', enemigo.x, enemigo.y, enemigo.id);
                        } else if (mokeponNombre === "Langostel") {
                            mokeponEnemigo = new Mokepon('Langostel', './Imgs/mokepons_langostel.png', 5, './Imgs/mokepons_langostel.png', enemigo.x, enemigo.y, enemigo.id);
                        } else if (mokeponNombre === "Tucapalma") {
                            mokeponEnemigo = new Mokepon('Tucapalma', './Imgs/Tucapalma.png', 5, './Imgs/Tucapalma.png', enemigo.x, enemigo.y, enemigo.id);
                        } else if (mokeponNombre === "Pydos") {
                            mokeponEnemigo = new Mokepon('Pydos', './Imgs/Pydos.png', 5, './Imgs/Pydos.png', enemigo.x, enemigo.y, enemigo.id);
                        }
                    }
                    return mokeponEnemigo;
                })
                .filter((item) => item != null); 
            })
        }
    })
}

function moverArriba() {
    if (!mokeponObjeto) return;
    mokeponObjeto.velocidadY = -10
}
function moverDerecha() {
    if (!mokeponObjeto) return;
    mokeponObjeto.velocidadX = 10
}
function moverAbajo() {
    if (!mokeponObjeto) return;
    mokeponObjeto.velocidadY = 10
}
function moverIzquierda() {
    if (!mokeponObjeto) return;
    mokeponObjeto.velocidadX = -10
}
function detenerMovimiento() {
    if (!mokeponObjeto) return;
    mokeponObjeto.velocidadX = 0
    mokeponObjeto.velocidadY = 0
}

function presionTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba();
            break;
        case 'ArrowRight':
            moverDerecha();
            break;
        case 'ArrowDown':
            moverAbajo();
            break;
        case 'ArrowLeft':
            moverIzquierda();
            break;
        default:
            break;
    }
}

function iniciarMapa() {
    mokeponObjeto = obtenerMokepon(mokeponJugador);

    intervalo = setInterval(pintarCanvas, 50);
    window.addEventListener('keydown', presionTecla);
    window.addEventListener('keyup', detenerMovimiento);
}

function obtenerMokepon() {
    for(let i = 0; i < mokepones.length; i++) {
        if(mokeponJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const abajoEnemigo = enemigo.y + enemigo.alto;
    const izquierdaEnemigo = enemigo.x;

    const arribaMokepon = mokeponObjeto.y;
    const derechaMokepon = mokeponObjeto.x + mokeponObjeto.ancho;
    const abajoMokepon = mokeponObjeto.y + mokeponObjeto.alto;
    const izquierdaMokepon = mokeponObjeto.x;

    if (abajoMokepon < arribaEnemigo || arribaMokepon > abajoEnemigo || derechaMokepon < izquierdaEnemigo || izquierdaMokepon > derechaEnemigo) {
        return;
    }

    detenerMovimiento();
    clearInterval(intervalo);
    enemigoId = enemigo.id;
    sectionVerMapa.style.display = 'none';
    seleccionAtaque.style.display = 'flex'; // Mostrar la sección de seleccionar ataque al iniciar el juego
    sectionVerMapa.style.display = 'none';
    seleccionarMascotaEnemigo(enemigo); // Llamar a la función para seleccionar la mascota del enemigo
}

window.addEventListener('load', iniciarJuego); // Cuando se cargue la página, se ejecuta la función iniciarJuego (Esto evita mover el script al final del body).