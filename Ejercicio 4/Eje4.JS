var lista = ["Principito", "Cien años de soledad", "48 leyes del poder", "El poder del pensamiento", "Fundamentos de JS"]
var listadoElementos =document.getElementById("listado-libros")

let contenidoLista = ""

    for (let i = 0; i< lista.length; i++) { 
        contenidoLista += "<li onclick='cambiarTitulo("+ lista[i] +")'>" + lista[i] + "</li>"
    }
    //console.log(contenidoLista)
    listadoElementos.innerHTML = contenidoLista

    function cambiarTitulo(libro){console.log(libro)
        document.title=libro
    }