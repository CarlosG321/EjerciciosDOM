const inputNuevoElemento = document.getElementById("input-nuevo-elemento")
const listadoElementos =document.getElementById("listado-elementos")

const elementos = []

function agregarElemento(){
    //Leer el valor del campo de texto
    const nuevoElemento = inputNuevoElemento.value
    if(nuevoElemento) {//Si no está vacío
    }
    elementos.push(nuevoElemento)

    console.log(nuevoElemento)
    //Limpuar el input
    inputNuevoElemento.value = ""
    //Agregar el elemento al listado de elementos

    console.log(elementos)

    //Mostrar elementos de la página
    mostrarElementos()
}

function mostrarElementos() {
    let contenidoLista = ""
    for (let i = 0; i< elementos.length; i++) {
        contenidoLista += "<li>" + elementos[i] + "</li>"
    }
    //console.log(contenidoLista)
    listadoElementos.innerHTML = contenidoLista
}