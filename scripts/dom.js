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
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    });
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

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
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

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
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

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
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

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
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

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
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

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
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

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
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

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
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

function crearFormularioAudio(){
    return`<form id="formulario">
        <label>Enlace del audio</label><br>
        <input type="textarea" id="enlace" name="myFile"><br><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

function insertarAudio(e){
    e.preventDefault();
    var d= crearFormularioAudio();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><audio controls><source src="${$('#enlace').val()}" type="audio/ogg"><source src="${$('#enlace').val()}" type="audio/mpeg">Your browser does not support the audio element.</audio></div>`;
        insertarElemento(e,'#contenido');
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
}

function crearFormularioVideo(){
    return`<form id="formulario">
        <label>Enlace del audio</label><br>
        <input type="textarea" id="enlace" name="myFile"><br><br>
        <label>Ancho (en px)</label>
        <input class="form-control" type="number" id="ancho" max="1500" min="10"><br>
        <label>Altura (en px)</label>
        <input class="form-control" type="number" max="1500" min="10" id="alto"><br>
        <input class="btn btn-success" id="Enviar" type="submit" value="Enviar" /><br>
        <input class="btn btn-success" id="Cancelar" type="button" value="Cancelar" /><br>
      </form>`;
}

function insertarVideo(e){
    e.preventDefault();
    var d= crearFormularioVideo();
    $('body').append(d);
    $('div').attr('hidden','true');
    $('#formulario').css({'border':'1px solid #808080','position': 'absolute', 'background': 'lightblue', 'z-index':'999'});
    $('#Enviar').on('click', function(){
        var e=`<div><iframe width="${$(ancho).val()}" height="${$(alto).val()}" src="${$('#enlace').val()}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
        insertarElemento(e,'#contenido');
        $('#formulario').remove();
        $('div').removeAttr('hidden');
    })
    $('#Cancelar').on('click', function(){$('#formulario').remove();$('div').removeAttr('hidden');})
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
