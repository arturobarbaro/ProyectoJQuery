function mostarVistaPrevia(){
    if($('#contenido').children()){
        $('#ocultar').show(1);
    }
}

function insertarElemento(elemento, padre){
    $(padre).append(elemento);
    mostarVistaPrevia();
    $('#contenido *').draggable();
    $(elemento).draggable();
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
    $('#table').on('click',function(e){
        var filas;
        do {
            filas = parseInt(prompt('Numero de filas de la tabla (comprendido entre 1 y 9)'));
        } while (isNaN(filas) | filas <= 0 | filas > 10);

        var columnas;
        do {
            columnas = parseInt(prompt('Numero de columnas de la tabla (comprendido entre 1 y 9)'));
        } while (isNaN(columnas) | columnas <= 0 | columnas > 10);
        var tabla = document.createElement('table');
        var d = document.createElement('div');
        var tr = document.createElement('tr');
        $(tr).css({'text-align': 'left', 'padding': '8px'})
        for (var i = 0; i < columnas; i++) {
            var td=document.createElement('td');
            td.addEventListener('click',function(){
                $(this).text(prompt('Valor a introducir'))
            })
            tr.appendChild(td);
            $(td).css({'text-align': 'left', 'padding': '8px'})
        }
        $(tabla).append(tr);
        $(d).append(tabla);
        $('#contenido').append(tabla);
        $('td').text('aaa')
        $(tabla).css({'border-collapse': 'collapse', 'width': '80%'});
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
