//Arreglo de objetos 
let fila= document.getElementById("listaproductos")

let productosCP=[
    {foto:"/imag/poster.jpg",nombre:"Posters",precio:35000,descripcion:"Posters de las chicas super poderosas originales de cartoons"},
    {foto:"/imag/camisa.jpg",nombre:"camisa",precio:70000,descripcion:"Camisa original de la animación"},
    {foto:"/imag/pegatina.jpg",nombre:"pegatina",precio:2500,descripcion:"pegatina de bellota,para que decores tus objetos favoritos"},
    {foto:"/imag/buzo.jpg",nombre:"buzo",precio:27000,descripcion:"buzos personalizados de los cartoons"},
    {foto:"/imag/medias.jpg",nombre:"medias",precio:12000,descripcion:"medias largas y tobilleras de la animación"},
    {foto:"/imag/espejo.jpg",nombre:"espejo",precio:5500,descripcion:"En la tapa cuenta con diseño de tu preferencia En la parte interna se encuentran dos espejos"},
    {foto:"/imag/termo.jpg",nombre:"termo",precio:10000,descripcion:"botellas de Las Chicas Super Poderosas son un diseño original de BEGO Boutique. Tienen caras diferentes por toda la botella."},
    {foto:"/imag/estuche.jpg",nombre:"estuche",precio:8000,descripcion:"estuche de corazones para todo tipo de telefonos"},
    {foto:"/imag/bolsa.jpg",nombre:"bolsa",precio:13000,descripcion:"Reutilizable y ligera, ideal para llevar a todas partes y comprar de manera responsable"},
    {foto:"/imag/sabana.jpg",nombre:"sabana",precio:22000,descripcion:"Estampado por toda la superficie por sublimación cuando lo pides"}
]

//recorriendo un arreglo con JS
//buscar/seleccionar/esculcar
productosCP.forEach(function(producto){
    console.log("chicas")
})

//escuchando clic en el boton
let boton=document.getElementById("boton")

//detectando el primer evento
boton.addEventListener("click",cambiarFoto)

//creando una funcion
function cambiarFoto(){
    
    let foto=document.getElementById("fotoprueba")
    foto.src="imag/foto2.png"
}
