function crearPagina(){
    $('body').append('<div id="div1" ></div>')
    $('body').append('<br>')
    $('#div1').append('<h1>Bienvenidos al Gestor de contenido de Arturo</h1>')
    $('#div1').append('<p>Bienvenidos al Gestor de contenido de Arturo</p>')
    $('#div1').append('<button id="boton" type="button" name="button">+Info</button>')
    $('#boton').on('click',function(){
        $('body').append('<div id="div2" style="background-color:white"></div>')
        $('#div2').append('<p>Bienvenidos al Gestor de contenido de Arturo</p>')
        $('#div2').append('<button id="b1" type="button" name="new">Pruebalo</button>')
    })
}

function inicio(){
    $(document).off('mousemove');
    window.confirm("¿Desea que aparezca una ayuda?")?crearPagina():alert("De acuerdo. Si desea cambiar de opcion seleccione aceptar");
}

function mostrarAyuda(){

}

$(document).ready(function(){
    $(document).on('mousemove', function(){
        inicio();
    });
});
