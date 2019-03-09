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
    $('#imgE').on('click',insertarImagenE);
    $('#a').on('click',insertarRuta);
    $('#ab').on('click',insertarBotonEnlace);
    $('#formu').on('click',insertarFormulario);
    $('#formu1').on('click',insertarInput);
    $('#button').on('click',insertarBoton);
    $('#table').on('click',insertarTabla);
    $('#audio').on('click',insertarAudio);
    $('#video').on('click',insertarVideo);
    $('#ct').on('click',estilosColorTitulo);
    $('#ctxt').on('click',estilosColorTexto);
    $('#cf').on('click',estilosColorFondo);
});
