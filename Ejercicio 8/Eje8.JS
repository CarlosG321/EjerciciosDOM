var n = prompt("Ingresa un número mayor que 0 y menor o igual a 10")
var lista = ["Programa" , "Paisaje" , "Tecnología" , "Informatica" , "Computadora" , "Dinero" , "Dados" , "Fichas" , "Cuchilla" , "Movil"]
var listadoElementos =document.getElementById("listado-elementos")

let contenidoLista = ""


for (let i = 0; i<=n-1; i++) {
    contenidoLista += "<li>" + lista[i] + "</li>"
}

listadoElementos.innerHTML = contenidoLista