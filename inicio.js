function crearPagina(){
    console.log("Paco cabron saluda al campeon");
}

function inicio(){
    $(document).off('mousemove');
    window.confirm("¿Desea que aparezca una ayuda?")?crearPagina():alert("De acuerdo. Si desea cambiar de opcion seleccione aceptar");
}

$(document).ready(function(){
    $(document).on('mousemove', function(){
        inicio();
    });
});
