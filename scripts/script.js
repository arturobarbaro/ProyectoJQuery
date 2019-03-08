$(function(){
    $('#contenido *').draggable();
    $('#ocultar').hide(1)
    .on('click',function(){
        $('.ocultable').attr('hidden','true');
        $('body').on('dblclick',function(){
            $('div').removeAttr('hidden');
        })
    });
    $('#new').click(function(){location.reload()});
    $('#h').on('click',insertarTitulo);
    $('#p').on('click', insertarTexto);
    $('#img').on('click',insertarImagen);
    $('#a').on('click',insertarRuta);
    $('#table').on('click',insertarTabla);
    $('#ct').on('click',function(e){
        e.preventDefault();
        var c=prompt('Introduzca el color en ingles');
        $('[name="titulo"]').css({'color': c});
    });
    $('#ctxt').on('click',function(e){
        e.preventDefault();
        var c=prompt('Introduzca el color en ingles');
        $('[name="texto"]').css({'color': c});
    });
    $('#cf').on('click',function(e){
        e.preventDefault();
        var c=prompt('Introduzca el color en ingles');
        $('body').css({'background-color': c});
    });
});
