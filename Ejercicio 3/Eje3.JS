function enviar(){
    var nombre = document.getElementById("nombre").value; 
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
 
    document.getElementById("Lnombre").innerHTML=nombre
    document.getElementById("Lapellido").innerHTML=apellido
    document.getElementById("Ledad").innerHTML=edad
}