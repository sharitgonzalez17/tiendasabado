//Comentario de linea

/*
comentario de bloque
*/

//VARIABLES
let nombreUsuario="Andrea"
let estaturaUsuario=1.65
let edadUsuario=18
let telefonoUsuario=""
let esPailsa=true //(banderas)

//CONSTANTES
const APELLIDOS_USUARIO=""

//UNIR LOS MENSAJES CON LAS VARIABLEs
//(CONCATENAR)
//console.log("Buenas tardes"+nombreUsuario+"su edad es"+edadUsuario)

//console.log(`buenas tardes ${nombreUsuario} su edad es ${edadUsuario}`)

//UTILIZANDO EL DOM
let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="SOLO VERDE"
etiquetaTitulo.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")

let tituloMenu=document.getElementById("tituloMenu")
tituloMenu.textContent="SUPER PODEROSAS"

let etiquetafotochicas=document.getElementById("fotochicas")
etiquetafotochicas.src="imag/foto2.jpg"

let etiquetanomApell=document.getElementById("nomApell")
etiquetanomApell.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")

let etiquetacorreo=document.getElementById("correo")
etiquetacorreo.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")

let etiquetainstagram=document.getElementById("Instagram")
etiquetainstagram.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")
