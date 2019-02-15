function crearPagina(){
    $('body').append(`<div class="header">
        <a href="#default" class="logo">Proyecto JQuery de Arturo</a>
        <div class="header-right">
            <a class="active" href="../index.html">Home</a>
            <a href="../about.html">Sobre nosotros</a>
        </div>
    </div>`)
    $('body').append('<div id="div1" ></div>')
    $('body').append('<br>')
    $('#div1').append('<h1>Proyecto de JQuery</h1>')
    $('#div1').append('<p>Bienvenidos al gestor de contenido de Arturo.</p>');
    $('#div1').append(`<p>Este proyecto es una práctica vista en clase sobre como incrustar codigo JavaScript con las librerias importadas de JQuery.
        La finalidad es crear un gestor de contenido a tiempo real, proporcionando al usuario la posibilidad de diseñar una página HTML
        viendo su maquetación en tiempo real.</p>`);
    $('#div1').append('<p>Pulse sobre el botón inferior si desea conocer mas información sobre como comenzar a trabajar con nosotros.</p>');
    $('#div1').append('<button id="boton" type="button" name="button">+Info</button>');
    $('#boton').on('click',function(){
        $('body').append('<div id="div2" style="background-color:white"></div>')
        $('#div2').append('<p>  Si desea continuar trabajando con nosotros pulse sobre el botón inferior.</p>')
        $('#div2').append('<button id="b1" type="button" name="new">Pruebalo</button>')
        $('#div2').append('<button id="b2" type="button" name="change">Cambiar fuente</button>')
        $('#b1').on('click',function(){
            window.open("./estilos/index.html");
        })
        $('#b2').on('click',estilos);
        $('#boton').off('click');
    })

}

function inicio(){
    $(document).off('mousemove');
    crearPagina();
    //window.confirm("¿Desea conocer mas sobre este proyecto?")?crearPagina():alert("De acuerdo. ¡Vuelva pronto!");
}

function estilos(){
    $('#div2 p').css('color','black');
}

$(document).ready(function(){
    $(document).on('mousemove', function(){
        inicio();
    });
});
