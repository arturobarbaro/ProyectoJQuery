function mostarVistaPrevia(){
    if($('#contenido').children()){$('#ocultar').show(1);}
}

function insertarElemento(elemento, padre){
    $(padre).append(elemento);
    mostarVistaPrevia();
    $('#contenido div').draggable();
    $(elemento).draggable();
}

function insertarTitulo(e){
    //TODO DEBEMOS OCULTAR TODO Y PONER EL DIV ENMEDIO
    var d= `
    <div id="formulario" class="form-group">
      <form>
        <label>Cadena:</label>
        <input class="form-control" type="text" id="cadena">
        <label>Tamaño</label>
        <select id="tam">
            <option value="h1">1</option>
            <option value="h2">2</option>
            <option value="h3">3</option>
            <option value="h4">4</option>
            <option value="h5">5</option>
            <option value="h6">6</option>
        </select>
        <div class="mt-3 text-right">
          <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" />
        </div>
      </form>
    </div>`;
    $('body').append(d);
    $('#formulario').css({'z-index':'999','width':'100%', 'height':'100%'});
    $('#Enviar').on('click', function(){
        var e=`<div><${$('#tam').val()} name="titulo">${$('#cadena').val()}</${$('#tam').val()}></div>`;
        if(titulo){insertarElemento(e,'#contenido');}
        $('#formulario').remove();
    })
    // var titulo=window.prompt('Inserte su titulo');
    // var e=`<div><${this.id} name="titulo">${titulo}</${this.id}></div>`;
    // if(titulo){insertarElemento(e,'#contenido');}
}

function insertarTextoA(e){
    e.preventDefault();
    var texto=window.prompt('Inserte texto');
    var e=`<div><${this.id} name="texto">${texto}</${this.id}></div>`;
    if(texto){insertarElemento(e,'#contenido');}
}

function insertarImagen(e){
    e.preventDefault();
    var ruta=window.prompt('Inserte su ruta');
    var e=`<div><${this.id} src="${ruta}" width="250px"></${this.id}></div>`;
    if(ruta){insertarElemento(e,'#contenido');}
}

function insertarTabla(e){
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
    for (var i = 1; i <= filas; i++) {
        var tr = document.createElement('tr');
        for (var j = 1; j <= columnas; j++) {
            var td=document.createElement('td');
            td.addEventListener('click',function(){
                $(this).text(prompt('Valor a introducir'))
            })
            td.innerText=`Fila ${i}, columna ${j}`;
            tr.appendChild(td);
        }
        $(tabla).append(tr);
    }
    $(d).append(tabla);
    insertarElemento(tabla,$('#contenido'))
    $('table').css({'border-collapse': 'collapse', 'width': '80%'});
    $('td').css({'text-align': 'left', 'padding': '8px'});
    $('tr').css({'text-align': 'left', 'padding': '8px'});
    $('tr:nth-child(even)').css({'background-color': '#f2f2f2'});
}

function insertarRuta(e){
    e.preventDefault();
    $('#contenido').modal('show');
    var ruta=window.prompt('Inserte su ruta (http://nombredelsitio.com.ar/archivo.html)');
    var nombre=window.prompt('Nombre del enlace');
    var e=`<div><${this.id} href="${ruta}">${nombre}</a></div>`;
    if(ruta && nombre){insertarElemento(e,'#contenido');}
}
