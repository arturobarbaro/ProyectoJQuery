function mostarVistaPrevia(){
    if($('#contenido').children()){$('#ocultar').show(1);}
}

function insertarElemento(elemento, padre){
    $(padre).append(elemento);
    mostarVistaPrevia();
    $('#contenido div').draggable();
    $(elemento).draggable();
}

function crearFormularioTitulo(){
    return`<form id="formulario">
        <label>Cadena:</label>
        <input class="form-control" type="text" id="cadena"><br>
        <label>Tamaño</label>
        <select id="tam">
            <option value="h1">1 (máximo)</option>
            <option value="h2">2</option>
            <option value="h3">3</option>
            <option value="h4">4</option>
            <option value="h5">5</option>
            <option value="h6">6 (mínimo)</option>
        </select><br>
        <label>Font-size (em)</label>
        <input class="form-control" type="number" id="size"><br>
        <label>Tipo de fuente</label>
        <select id="tipo">
            <option value="b">Bold</option>
            <option value="strong">Importante</option>
            <option value="i">Italic</option>
            <option value="em">Emphasized</option>
            <option value="mark">Marked</option>
            <option value="small">Small</option>
            <option value="del">Deleted</option>
            <option value="ins">Inserted</option>
            <option value="sub">Subscript</option>
            <option value="sup">Superscript</option>
        </select><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

function crearFormularioTexto(){
    return`<form id="formulario">
        <label>Cadena:</label>
        <textarea id="textoT" rows="7" cols="50" name="description" value=""></textarea><br>
        <label>Tipo de fuente</label>
        <select id="tipo">
            <option value="b">Bold</option>
            <option value="strong">Importante</option>
            <option value="i">Italic</option>
            <option value="em">Emphasized</option>
            <option value="mark">Marked</option>
            <option value="small">Small</option>
            <option value="del">Deleted</option>
            <option value="ins">Inserted</option>
            <option value="sub">Subscript</option>
            <option value="sup">Superscript</option>
        </select><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

function crearFormularioEnlace(){
    return`<form id="formulario">
        <label>Enlace web</label>
        <input class="form-control" type="text" id="enlace"><br>
        <label>Cadena que reemplazará al enlace</label>
        <input class="form-control" type="text" id="cadena"><br>
        <label>Tipo de fuente</label>
        <select id="tipo">
            <option value="b">Bold</option>
            <option value="strong">Importante</option>
            <option value="i">Italic</option>
            <option value="em">Emphasized</option>
            <option value="mark">Marked</option>
            <option value="small">Small</option>
            <option value="del">Deleted</option>
            <option value="ins">Inserted</option>
            <option value="sub">Subscript</option>
            <option value="sup">Superscript</option>
        </select><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

function crearFormularioImg(){
    return`<form id="formulario">
        <label>Elija una imagen</label>
        <input type="file" id="enlace" name="myFile"><br><br>
        <label>Cadena alternativa a la imagen</label>
        <input class="form-control" type="text" id="cadena"><br>
        <label>Ancho de la imagen (en px)</label>
        <input class="form-control" type="number" id="ancho" max="500" min="10"><br>
        <label>Altura de la imagen (en px)</label>
        <input class="form-control" type="number" max="500" min="10" id="alto"><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

function insertarTitulo(e){
    e.preventDefault();
    var d= crearFormularioTitulo();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><${$('#tam').val()} name="titulo"><${$('#tipo').val()}>${$('#cadena').val()}</${$('#tam').val()}><${$('#tipo').val()}></div>`;
        insertarElemento(e,'#contenido');
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    });
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

function insertarTexto(e){
    e.preventDefault();
    var d= crearFormularioTexto();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><p name="texto"><${$('#tipo').val()}>${$('#textoT').val()}</${$('#tipo').val()}></p></div>`;
        insertarElemento(e,'#contenido');
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

function insertarImagen(e){
    e.preventDefault();
    var d= crearFormularioImg();
    $('body').append(d);
    $('div').attr('hidden','true');    
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><img src="${$('#enlace').val()}" width="${$('#ancho').val()}px" height="${$('#alto').val()}px" alt="${$('#cadena').val()}"></img></div>`;
        insertarElemento(e,'#contenido');
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
    var e=`<div><${this.id} src="${ruta}" width="250px"></${this.id}></div>`;
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
    var d= crearFormularioEnlace();
    $('body').append(d);
    $('div').attr('hidden','true');    
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><a href="${$('#enlace').val()}" target="_blank"><${$('#tipo').val()}>${$('#cadena').val()}</${$('#tipo').val()}></a></div>`;
        insertarElemento(e,'#contenido');
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}
