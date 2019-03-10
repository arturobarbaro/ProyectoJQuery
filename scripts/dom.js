/**
 * Funcion encarga de mostrat o ocultar el boton de vista previa comprobando
 * si el elemento con id contenido tiene hijos
 */
function mostarVistaPrevia(){
    ($('#contenido').children().length > 0)?$('#ocultar').show(1):$('#ocultar').hide(1);
}

/**
 * Elimina el formulario de inserción de texto para el usuario
 */
function ocultarFormulario(){
    $('#formulario').remove();
    $('div').removeAttr('hidden');
}

/**
 * Inserta un elemento dom y le asigna eventos para poder arrastrarlo o eliminarlo
 * @param  element elemento elemento hijo
 * @param  element padre    elemento padre
 */
function insertarElemento(elemento, padre){
    $(padre).append(elemento);
    $('#contenido div').draggable();
    $(elemento).draggable();
    $("#contenido *").mousedown(function(e){e.preventDefault();if(e.which == 2){$(this).eliminar()}});
    mostarVistaPrevia();
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioTitulo(){
    return`<form id="formulario">
        <label>Cadena:</label><br>
        <textarea id="cadena" rows="7" cols="50" name="description" value=""></textarea><br><br>
        <label>Tamaño</label>
        <select id="tam">
            <option value="h1">1 (máximo)</option>
            <option value="h2">2</option>
            <option value="h3">3</option>
            <option value="h4">4</option>
            <option value="h5">5</option>
            <option value="h6">6 (mínimo)</option>
        </select><br><br>
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
        </select><br><br>
        <label>Alineación del texto</label>
        <select id="alig">
            <option value="left">Izquierda</option>
            <option value="center">Centro</option>
            <option value="right">Derecha</option>
            <option value="justify">Justificado</option>
        </select><br><br>
        <label>Decoración del texto</label>
        <select id="decoracion">
            <option value="none">Normal</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line-through</option>
            <option value="underline">Underline</option>
        </select><br><br>
        <label>Color del texto</label>
        <input id="color" type="color" name="favcolor" value="#000000"><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-danger" id="Cancelar" type="button" value="Cancelar" /><br><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarTitulo(e){
    e.preventDefault();
    var d= crearFormularioTitulo();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><${$('#tam').val()} name="titulo"><${$('#tipo').val()}>${$('#cadena').val()}</${$('#tam').val()}><${$('#tipo').val()}></div>`;
        insertarElemento(e,'#contenido');
        $('#contenido').children().last().css({'color':`${$('#color').val()}`, 'text-align':`${$('#alig').val()}`, 'text-decoration':`${$('#decoracion').val()}`});
        ocultarFormulario();
    });
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioTexto(){
    return`<form id="formulario">
        <label>Cadena:</label><br>
        <textarea id="cadena" rows="7" cols="50" name="description" value=""></textarea><br><br>
        <label>Tamaño de la fuente (em)</label>
        <select id="size">
            <option value="xx-small">xx-small</option>
            <option value="x-small">x-small</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="x-large">x-large</option>
            <option value="xx-large">xx-large</option>
        </select><br><br>
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
        </select><br><br>
        <label>Alineación del texto</label>
        <select id="alig">
            <option value="left">Izquierda</option>
            <option value="center">Centro</option>
            <option value="right">Derecha</option>
            <option value="justify">Justificado</option>
        </select><br><br>
        <label>Decoración del texto</label>
        <select id="decoracion">
            <option value="none">Normal</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line-through</option>
            <option value="underline">Underline</option>
        </select><br><br>
        <label>Color del texto</label>
        <input id="color" type="color" name="favcolor" value="#000000"><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-danger" id="Cancelar" type="button" value="Cancelar" /><br><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarTexto(e){
    e.preventDefault();
    var d= crearFormularioTexto();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><p name="texto"><${$('#tipo').val()}>${$('#cadena').val()}</${$('#tipo').val()}></p></div>`;
        insertarElemento(e,'#contenido');
        $('#contenido').children().last().css({'color':`${$('#color').val()}`, 'text-align':`${$('#alig').val()}`, 'text-decoration':`${$('#decoracion').val()}`, 'font-size':`${$('#size').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioCaja(){
    return`<form id="formulario">
        <label>Cadena:</label><br>
        <textarea id="cadena" rows="7" cols="50" name="description" value=""></textarea><br><br>
        <label>Tamaño de la fuente (em)</label>
        <select id="size">
            <option value="xx-small">xx-small</option>
            <option value="x-small">x-small</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="x-large">x-large</option>
            <option value="xx-large">xx-large</option>
        </select><br><br>
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
        </select><br><br>
        <label>Alineación del texto</label>
        <select id="alig">
            <option value="left">Izquierda</option>
            <option value="center">Centro</option>
            <option value="right">Derecha</option>
            <option value="justify">Justificado</option>
        </select><br><br>
        <label>Decoración del texto</label>
        <select id="decoracion">
            <option value="none">Normal</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line-through</option>
            <option value="underline">Underline</option>
        </select><br><br>
        <label>Color del texto</label>
        <input id="color" type="color" name="favcolor" value="#000000"><br><br>
        <label>Background-color: </label>
        <input id="bcolor" type="color" name="favcolor" value="#ffffff"><br><br>
        <label>Borde (en px)</label>
        <input class="form-control" type="number" max="10" min="0" id="borde"><br><br>
        <label>Tipo de borde</label>
        <select id="btipo">
            <option value="none">none</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
            <option value="double">double</option>
        </select><br>
        <label>Color del borde: </label>
        <input id="bocolor" type="color" name="favcolor" value="#000000"><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-danger" id="Cancelar" type="button" value="Cancelar" /><br><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarCaja(e){
    e.preventDefault();
    var d= crearFormularioCaja();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><p name="texto"><${$('#tipo').val()}>${$('#cadena').val()}</${$('#tipo').val()}></p></div>`;
        insertarElemento(e,'#contenido');
        $('#contenido').children().last().css({'position': 'absolute', 'background-color':`${$('#bcolor').val()}`, 'border':`${$('#borde').val()}px ${$('#btipo').val()} ${$('#bocolor').val()}`, 'color':`${$('#color').val()}`, 'text-align':`${$('#alig').val()}`, 'text-decoration':`${$('#decoracion').val()}`, 'font-size':`${$('#size').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioLista(){
    return`<form id="formulario">
        <label>Tipo de lista</label>
        <select id="tlista">
            <option value="ol">Numerada</option>
            <option value="ul">No numerada</option>
        </select><br><br>
        <label>Tamaño de la fuente (em)</label>
        <select id="size">
            <option value="xx-small">xx-small</option>
            <option value="x-small">x-small</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="x-large">x-large</option>
            <option value="xx-large">xx-large</option>
        </select><br><br>
        <label>Alineación del texto</label>
        <select id="alig">
            <option value="left">Izquierda</option>
            <option value="center">Centro</option>
            <option value="right">Derecha</option>
            <option value="justify">Justificado</option>
        </select><br><br>
        <label>Decoración del texto</label>
        <select id="decoracion">
            <option value="none">Normal</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line-through</option>
            <option value="underline">Underline</option>
        </select><br><br>
        <label>Color del texto</label>
        <input id="color" type="color" name="favcolor" value="#000000"><br><br>
        <label>Background-color: </label>
        <input id="bcolor" type="color" name="favcolor" value="#ffffff"><br><br>
        <label>Borde (en px)</label>
        <input class="form-control" type="number" max="10" min="0" id="borde"><br><br>
        <label>Tipo de borde</label>
        <select id="tipo">
            <option value="none">none</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
            <option value="double">double</option>
        </select><br>
        <label>Color del borde: </label>
        <input id="bocolor" type="color" name="favcolor" value="#000000"><br><br>
        <h3>Elemento 1</h3>
        <label>Cadena:</label><br>
        <textarea id="cadena1" rows="7" cols="50" name="description" value=""></textarea><br><br>
        <label>Tipo de fuente</label>
        <select id="tipo1">
        <option value="b">Bold</option>
        <option value="strong">Importante</option>
        <option value="i">Italic</option>
        <option value="em">Emphasized</option>
        <option value="mark">Marked</option>
        <option value="small">Small</option>
        <option value="ins">Inserted</option>
        </select><br><br>
        <h3>Elemento 2</h3>
        <label>Cadena:</label><br>
        <textarea id="cadena2" rows="7" cols="50" name="description" value=""></textarea><br><br>
        <label>Tipo de fuente</label>
        <select id="tipo2">
        <option value="b">Bold</option>
        <option value="strong">Importante</option>
        <option value="i">Italic</option>
        <option value="em">Emphasized</option>
        <option value="mark">Marked</option>
        <option value="small">Small</option>
        <option value="ins">Inserted</option>
        </select><br><br>
        <h3>Elemento 3</h3>
        <label>Cadena:</label><br>
        <textarea id="cadena3" rows="7" cols="50" name="description" value=""></textarea><br><br>
        <label>Tipo de fuente</label>
        <select id="tipo3">
        <option value="b">Bold</option>
        <option value="strong">Importante</option>
        <option value="i">Italic</option>
        <option value="em">Emphasized</option>
        <option value="mark">Marked</option>
        <option value="small">Small</option>
        <option value="ins">Inserted</option>
        </select><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-danger" id="Cancelar" type="button" value="Cancelar" /><br><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarLista(e){
    e.preventDefault();
    var d= crearFormularioLista();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><${$('#tlista').val()} name="texto">
        <${$('#tipo1').val()}><li>${$('#cadena1').val()}</li></${$('#tipo1').val()}>
        <${$('#tipo2').val()}><li>${$('#cadena2').val()}</li></${$('#tipo2').val()}>
        <${$('#tipo3').val()}><li>${$('#cadena3').val()}</li></${$('#tipo3').val()}>
        </${$('#tlista').val()}></div>`;
        insertarElemento(e,'#contenido');
        $('#contenido').children().last().css({'position': 'absolute', 'background-color':`${$('#bcolor').val()}`, 'border':`${$('#borde').val()}px ${$('#tipo').val()} ${$('#bocolor').val()}`, 'color':`${$('#color').val()}`, 'text-align':`${$('#alig').val()}`, 'text-decoration':`${$('#decoracion').val()}`, 'font-size':`${$('#size').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioEnlace(){
    return`<form id="formulario">
        <label>Enlace web</label>
        <input class="form-control" type="text" id="enlace"><br><br>
        <label>Cadena que reemplazará al enlace</label>
        <input class="form-control" type="text" id="cadena"><br><br>
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
        </select><br><br>
        <label>Tamaño de la fuente (em)</label>
        <select id="size">
            <option value="xx-small">xx-small</option>
            <option value="x-small">x-small</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="x-large">x-large</option>
            <option value="xx-large">xx-large</option>
        </select><br><br>
        <label>Decoracion: </label>
        <select id="ldecoracion">
            <option value="none">Normal</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line-through</option>
            <option value="underline">Underline</option>
        </select><br><br>
        <label>Background-color: </label>
        <input id="bcolor" type="color" name="favcolor" value="#ffffff"><br><br>
        <label>Color: </label>
        <input id="lcolor" type="color" name="favcolor" value="#000000"><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarRuta(e){
    e.preventDefault();
    var d= crearFormularioEnlace();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><a href="${$('#enlace').val()}" target="_blank"><${$('#tipo').val()}>${$('#cadena').val()}</${$('#tipo').val()}></a></div>`;
        insertarElemento(e,'#contenido');
        self = $('#contenido').children().last();
        $(self).children().children().css({'color':`${$('#lcolor').val()}`, 'background-color':`${$('#bcolor').val()}`, 'text-decoration':`${$('#ldecoracion').val()}`, 'font-size':`${$('#size').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioBotonEnlace(){
    return`<form id="formulario">
        <label>Enlace web</label>
        <input class="form-control" type="text" id="enlace"><br><br>
        <label>Cadena que reemplazará al enlace</label>
        <input class="form-control" type="text" id="cadena"><br><br>
        <label>Tipo de fuente</label>
        <label>Alineación del texto</label>
        <select id="alig">
            <option value="left">Izquierda</option>
            <option value="center">Centro</option>
            <option value="right">Derecha</option>
            <option value="justify">Justificado</option>
        </select><br><br><br>
        <label>Tamaño de la fuente (em)</label>
        <select id="size">
            <option value="xx-small">xx-small</option>
            <option value="x-small">x-small</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="x-large">x-large</option>
            <option value="xx-large">xx-large</option>
        </select><br><br>
        <label>Decoracion: </label>
        <select id="ldecoracion">
            <option value="none">Normal</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line-through</option>
            <option value="underline">Underline</option>
        </select><br><br>
        <label>Ancho del boton (en px)</label>
        <input class="form-control" type="number" id="ancho" max="500" min="1"><br><br>
        <label>Altura del boton (en px)</label>
        <input class="form-control" type="number" max="500" min="1" id="alto"><br><br>
        <label>Background-color: </label>
        <input id="bcolor" type="color" name="favcolor" value="#ffffff"><br><br>
        <label>Color: </label>
        <input id="lcolor" type="color" name="favcolor" value="#000000"><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarBotonEnlace(e){
    e.preventDefault();
    var d= crearFormularioBotonEnlace();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><a href="${$('#enlace').val()}" target="_blank">${$('#cadena').val()}</a></div>`;
        insertarElemento(e,'#contenido');
        self = $('#contenido').children().last();
        $(self).children().css({'color':`${$('#lcolor').val()}`, 'background-color':`${$('#bcolor').val()}`, 'padding':`${$('#alto').val()}px ${$('#ancho').val()}px `, 'font-size':`${$('#size').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioBoton(){
    return`<form id="formulario">
        <label>Texto del boton</label>
        <input class="form-control" type="text" id="cadena"><br><br>
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
        </select><br><br>
        <label>Tamaño de la fuente (em)</label>
        <select id="size">
            <option value="xx-small">xx-small</option>
            <option value="x-small">x-small</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="x-large">x-large</option>
            <option value="xx-large">xx-large</option>
        </select><br><br>
        <label>Decoracion: </label>
        <select id="ldecoracion">
            <option value="none">Normal</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line-through</option>
            <option value="underline">Underline</option>
        </select><br><br>
        <label>Ancho del boton (en px)</label>
        <input class="form-control" type="number" id="ancho" max="500" min="1"><br><br>
        <label>Altura del boton (en px)</label>
        <input class="form-control" type="number" max="500" min="1" id="alto"><br><br>
        <label>Background-color: </label>
        <input id="bcolor" type="color" name="favcolor" value="#ffffff"><br><br>
        <label>Color: </label>
        <input id="lcolor" type="color" name="favcolor" value="#000000"><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarBoton(e){
    e.preventDefault();
    var d= crearFormularioBoton();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><button>${$('#cadena').val()}</button></div>`;
        insertarElemento(e,'#contenido');
        $('#contenido').children().last().children().css({'padding':`${$('#alto').val()}px ${$('#ancho').val()}px `, 'color':`${$('#lcolor').val()}`, 'background-color':`${$('#bcolor').val()}`, 'text-decoration':`${$('#ldecoracion').val()}`, 'font-size':`${$('#size').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormulario(){
    return`<form id="formulario">
        <label>Color de fondo: </label>
        <input id="bcolor" type="color" name="favcolor" value="#ffffff"><br><br>
        <label>Color de la fuente: </label>
        <input id="color" type="color" name="favcolor" value="#000000"><br><br>
        <label>Tamaño de la fuente (em)</label>
        <select id="size">
            <option value="xx-small">xx-small</option>
            <option value="x-small">x-small</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="x-large">x-large</option>
            <option value="xx-large">xx-large</option>
        </select><br>
        <label>Borde (en px)</label>
        <input class="form-control" type="number" max="10" min="0" id="borde"><br><br>
        <label>Tipo de borde</label>
        <select id="tipo">
            <option value="none">none</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
            <option value="double">double</option>
        </select><br>
        <label>Color del borde: </label>
        <input id="bocolor" type="color" name="favcolor" value="#000000"><br><br>
        <h2>Primer Campo</h2>
        <label>Nombre del campo</label>
        <input class="form-control" type="text" id="1cadena"><br><br>
        <label>Tipo campo</label>
        <select id="1tipo">
            <option value="text">Text</option>
            <option value="textArea">TextArea</option>
            <option value="number">Numérico</option>
            <option value="color">Color</option>
            <option value="file">File</option>
        </select><br>
        <h2>Segundo Campo</h2>
        <label>Nombre del campo</label>
        <input class="form-control" type="text" id="2cadena"><br><br>
        <label>Tipo campo</label>
        <select id="2tipo">
            <option value="text">Text</option>
            <option value="textArea">TextArea</option>
            <option value="number">Numérico</option>
            <option value="color">Color</option>
            <option value="file">File</option>
        </select><br><br>
        <h2>Tercer Campo</h2>
        <label>Nombre del campo</label>
        <input class="form-control" type="text" id="3cadena"><br><br>
        <label>Tipo campo</label>
        <select id="3tipo">
            <option value="text">Text</option>
            <option value="textArea">TextArea</option>
            <option value="number">Numérico</option>
            <option value="color">Color</option>
            <option value="file">File</option>
        </select><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarFormulario(e){
    e.preventDefault();
    var d= crearFormulario();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><form><label>${$('#1cadena').val()}</label><br><input type="${$('#1tipo').val()}"><br><br>
                    <label>${$('#2cadena').val()}</label><br><input type="${$('#2tipo').val()}"><br><br>
                    <label>${$('#3cadena').val()}</label><br><input type="${$('#3tipo').val()}"><br><br></form></div>`;
        insertarElemento(e,'#contenido');
        $('#contenido').children().last().children().css({'position': 'absolute','color':`${$('#color').val()}`, 'background-color':`${$('#bcolor').val()}`, 'border':`${$('#borde').val()}px ${$('#tipo').val()} ${$('#bocolor').val()}`, 'font-size':`${$('#size').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioInput(){
    return`<form id="formulario">
        <label>Color de fondo: </label>
        <input id="bcolor" type="color" name="favcolor" value="#ffffff"><br><br>
        <label>Color de la fuente: </label>
        <input id="color" type="color" name="favcolor" value="#000000"><br><br>
        <label>Tamaño de la fuente (em)</label>
        <select id="size">
            <option value="xx-small">xx-small</option>
            <option value="x-small">x-small</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="x-large">x-large</option>
            <option value="xx-large">xx-large</option>
        </select><br>
        <label>Borde (en px)</label>
        <input class="form-control" type="number" max="10" min="0" id="borde"><br><br>
        <label>Tipo de borde</label>
        <select id="tipo">
            <option value="none">none</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
            <option value="double">double</option>
        </select><br>
        <label>Color del borde: </label>
        <input id="bocolor" type="color" name="favcolor" value="#000000"><br><br>
        <label>Nombre del campo</label>
        <input class="form-control" type="text" id="1cadena"><br><br>
        <label>Tipo campo</label>
        <select id="1tipo">
            <option value="text">Text</option>
            <option value="textArea">TextArea</option>
            <option value="number">Numérico</option>
            <option value="color">Color</option>
            <option value="file">File</option>
        </select><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarInput(e){
    e.preventDefault();
    var d= crearFormularioInput();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><form><label>${$('#1cadena').val()}</label><br><input type="${$('#1tipo').val()}"><br><br></form></div>`;
        insertarElemento(e,'#contenido');
        $('#contenido').children().last().children().css({'position': 'absolute','color':`${$('#color').val()}`, 'background-color':`${$('#bcolor').val()}`, 'border':`${$('#borde').val()}px ${$('#tipo').val()} ${$('#bocolor').val()}`, 'font-size':`${$('#size').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioImg(){
    return`<form id="formulario">
        <label>Elija una imagen</label>
        <input type="file" id="enlace" name="myFile"><br><br>
        <label>Color de fondo: </label>
        <input id="bcolor" type="color" name="favcolor" value="#ffffff"><br><br>
        <label>Cadena alternativa a la imagen</label>
        <input class="form-control" type="text" id="cadena"><br>
        <label>Ancho de la imagen (en px)</label>
        <input class="form-control" type="number" id="ancho" max="500" min="10"><br>
        <label>Altura de la imagen (en px)</label>
        <input class="form-control" type="number" max="500" min="10" id="alto"><br>
        <label>Borde (en px)</label>
        <input class="form-control" type="number" max="10" min="0" id="borde"><br><br>
        <label>Tipo de borde</label>
        <select id="tipo">
            <option value="none">none</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
            <option value="double">double</option>
        </select><br>
        <label>Color del borde: </label>
        <input id="bocolor" type="color" name="favcolor" value="#000000"><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarImagen(e){
    e.preventDefault();
    var d= crearFormularioImg();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        cadena=$('#enlace').val();
        subcadenas = cadena.split("\\");
        cadena=subcadenas[subcadenas.length-1];
        console.log(cadena);
        var e=`<div><img src="../img/${cadena}" width="${$('#ancho').val()}px" height="${$('#alto').val()}px" alt="${$('#cadena').val()}"></img></div>`;
        insertarElemento(e,'#contenido');
        $('#contenido').children().last().children().css({'position': 'absolute', 'background-color':`${$('#bcolor').val()}`, 'border':`${$('#borde').val()}px ${$('#tipo').val()} ${$('#bocolor').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioImgE(){
    return`<form id="formulario">
        <label>Elija una imagen</label>
        <input type="text" id="enlace" name="myFile"><br><br>
        <label>Color de fondo: </label>
        <input id="bcolor" type="color" name="favcolor" value="#ffffff"><br><br>
        <label>Cadena alternativa a la imagen</label>
        <input class="form-control" type="text" id="cadena"><br>
        <label>Ancho de la imagen (en px)</label>
        <input class="form-control" type="number" id="ancho" max="500" min="10"><br>
        <label>Altura de la imagen (en px)</label>
        <input class="form-control" type="number" max="500" min="10" id="alto"><br>
        <label>Borde (en px)</label>
        <input class="form-control" type="number" max="10" min="0" id="borde"><br><br>
        <label>Tipo de borde</label>
        <select id="tipo">
            <option value="none">none</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
            <option value="double">double</option>
        </select><br>
        <label>Color del borde: </label>
        <input id="bocolor" type="color" name="favcolor" value="#000000"><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarImagenE(e){
    e.preventDefault();
    var d= crearFormularioImgE();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><img src="${$('#enlace').val()}" width="${$('#ancho').val()}px" height="${$('#alto').val()}px" alt="${$('#cadena').val()}"></img></div>`;
        insertarElemento(e,'#contenido');
        $('#contenido').children().last().children().css({'position': 'absolute', 'background-color':`${$('#bcolor').val()}`, 'border':`${$('#borde').val()}px ${$('#tipo').val()} ${$('#bocolor').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioAudio(){
    return`<form id="formulario">
        <label>Enlace del audio</label><br>
        <input type="textarea" id="enlace" name="myFile"><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarAudio(e){
    e.preventDefault();
    var d= crearFormularioAudio();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><audio controls><source src="${$('#enlace').val()}" type="audio/ogg"><source src="${$('#enlace').val()}" type="audio/mpeg">Your browser does not support the audio element.</audio></div>`;
        insertarElemento(e,'#contenido');
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioVideo(){
    return`<form id="formulario">
        <label>Enlace del video</label><br>
        <input type="textarea" id="enlace" name="myFile"><br><br>
        <label>Ancho (en px)</label>
        <input class="form-control" type="number" id="ancho" max="1500" min="10"><br>
        <label>Altura (en px)</label>
        <input class="form-control" type="number" max="1500" min="10" id="alto"><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarVideo(e){
    e.preventDefault();
    var d= crearFormularioVideo();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><iframe width="${$(ancho).val()}" height="${$(alto).val()}" src="${$('#enlace').val()}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
        insertarElemento(e,'#contenido');
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function crearFormularioTabla(){
    return`<form id="formulario">
        <label>Color de fuente </label>
        <input id="color" type="color" name="favcolor" value="#000000"><br>
        <label>Color de fondo: </label>
        <input id="bcolor" type="color" name="favcolor" value="#ffffff"><br>
        <label>Filas: </label>
        <input class="form-control" type="number" id="filas" max="10" min="1"><br>
        <label>Columnas: </label>
        <input class="form-control" type="number" id="columnas" max="10" min="1"><br>
        <label>Altura (en px) </label>
        <input class="form-control" type="number" id="alto" max="400" min="50"><br>
        <label>Ancho (en px) </label>
        <input class="form-control" type="number" id="ancho" max="400" min="50"><br>
        <h3>Borde de la tabla</h3>
        <label>Borde (en px)</label>
        <input class="form-control" type="number" max="10" min="0" id="tborde"><br>
        <label>Tipo de borde</label>
        <select id="ttipo">
            <option value="none">none</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
            <option value="double">double</option>
        </select><br>
        <label>Color del borde: </label>
        <input id="tbocolor" type="color" name="favcolor" value="#000000"><br>
        <h3>Borde de las filas</h3>
        <label>Borde (en px)</label>
        <input class="form-control" type="number" max="10" min="0" id="fborde"><br>
        <label>Tipo de borde</label>
        <select id="ftipo">
            <option value="none">none</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
            <option value="double">double</option>
        </select><br>
        <label>Color del borde: </label>
        <input id="fbocolor" type="color" name="favcolor" value="#000000"><br>
        <h3>Borde de las columnas</h3>
        <label>Borde (en px)</label>
        <input class="form-control" type="number" max="10" min="0" id="cborde"><br>
        <label>Tipo de borde</label>
        <select id="ctipo">
            <option value="none">none</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
            <option value="double">double</option>
        </select><br>
        <label>Color del borde: </label>
        <input id="cbocolor" type="color" name="favcolor" value="#000000"><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

/**
 * Crea una tabla. Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function crearTabla(filas, columnas){
    var tabla = document.createElement('table');
    var d = document.createElement('div');
    for (var i = 1; i <= filas; i++) {
        var tr = document.createElement('tr');
        for (var j = 1; j <= columnas; j++) {
            var td=document.createElement('td');
            td.addEventListener('dblclick',function(){
                $(this).text(prompt('Valor a introducir'))
            })
            td.innerText=`Fila ${i}, columna ${j}`;
            tr.appendChild(td);
        }
        $(tabla).append(tr);
    }
    $(d).append(tabla);
    insertarElemento(tabla,$('#contenido'))
}

/**
 * Recoge los datos del formulario e inserta el elemento DOM asignado
 */
function insertarTabla(e){
    e.preventDefault();
    var d= crearFormularioTabla();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        crearTabla($('#filas').val(), $('#columnas').val());
        $('#contenido').children().last().css({'border-collapse': 'collapse', 'width': `${$('#ancho').val()}px`, 'height':`${$('#alto').val()}px`, 'border':`${$('#tborde').val()}px ${$('#ttipo').val()} ${$('#tbocolor').val()}`, 'color' : `${$('#color').val()}`});
        $('#contenido').children().last().children().children().css({'background-color' : `${$('#bcolor').val()}`, 'border-collapse': 'collapse', 'border':`${$('#fborde').val()}px ${$('#ftipo').val()} ${$('#fbocolor').val()}`, 'text-align': 'left', 'padding': '8px'});
        $('#contenido').children().last().children().children().children().css({'border-collapse': 'collapse', 'border':`${$('#cborde').val()}px ${$('#ctipo').val()} ${$('#cbocolor').val()}`, 'text-align': 'left', 'padding': '8px'});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Devuelve un formulario para que el usuario inserte datos
 * @return String el formulario
 */
function formularioColor(){
    return `<form id="formulario"><label>Color: </label><input id="color" type="color" name="favcolor" value="#ffffff"><br><br>
    <input class="btn btn-success" id="Enviar" type="submit" value="Guardar" /><br>
    <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br></form>`;
}

/**
 * Modifica el color de fondo recogiendo su valor de un formulario
 */
function estilosColorFondo(){
    var d = formularioColor();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        $('body').css({'background-color':`${$('#color').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Recoge los datos del formulario y modifica el color del selector DOM indicado
 */
function estilosColorTexto(){
    var d = formularioColor();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        $('[name="texto"]').css({'color': `${$('#color').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}

/**
 * Recoge los datos del formulario y modifica el color del selector DOM indicado
 */
function estilosColorTitulo(){
    var d = formularioColor();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        $('[name="titulo"]').css({'color': `${$('#color').val()}`});
        ocultarFormulario();
    })
    $('#Cancelar').on('click', ocultarFormulario)
}
