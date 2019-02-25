function mostarVistaPrevia(){
    if($('#contenido').children()){
        $('#ocultar').show(1);
    }
}

function insertarElemento(elemento, padre){
    $(padre).append(elemento);
    mostarVistaPrevia();
    $('#contenido *').draggable();
    // if (document.getElementById('contenido').hasChildNodes()){
    //     if (!document.getElementById('ver')){
    //         $('#nav').append('<button id="ver" type="button" name="ver">Vista Previa</button>');
    //     }
    // }
    //$('p').draggable();
    $(elemento).draggable();
    //$(elemento).on('drag', function(){console.log('aa')});
    // //$(elemento).parent().on('click',function(){console.log('as');})
    // //$('#contenido').draggable();
    // $('#contenido').on('mouseup', asignarPosicion);
    // $('#contenido').on('drag', comprobarPosicion);
}

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
    $('#titulo a').on('click',function(e){
        var titulo=window.prompt('Inserte su titulo');
        var e=`<div><${this.id} name="titulo">${titulo}</${this.id}></div>`;
        if(titulo){insertarElemento(e,'#contenido');}
    });
    $('#texto a').on('click',function(e){
        e.preventDefault();
        var texto=window.prompt('Inserte texto');
        var e=`<div><${this.id} name="texto">${texto}</${this.id}></div>`;
        if(texto){insertarElemento(e,'#contenido');}
    });
    $('#img').on('click',function(e){
        e.preventDefault();
        var ruta=window.prompt('Inserte su ruta');
        var e=`<${this.id} src="${ruta}"></${this.id}>`;
        if(ruta){insertarElemento(e,'#contenido');}
    });
    $('#a').on('click',function(e){
        e.preventDefault();
        var ruta=window.prompt('Inserte su ruta (http://nombredelsitio.com.ar/archivo.html)');
        var nombre=window.prompt('Nombre del enlace');
        var e=`<div><${this.id} href="${ruta}">${nombre}</a></div>`;
        if(ruta && nombre){insertarElemento(e,'#contenido');}
        $('#contenido').append()
    });
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
