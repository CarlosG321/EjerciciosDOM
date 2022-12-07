function crearCuadro()
{
    var ancho=document.getElementById("ancho").value;
    var alto=document.getElementById("alto").value;
    cuadro=document.getElementById("cuadro")
    cuadro.style.width=ancho+"px";
    cuadro.style.height=alto+"px";

}