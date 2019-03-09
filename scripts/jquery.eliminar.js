/**
 * Elimina un elemento dom.
 * Comprueba si se debe mostrar el boton de vista previa o no
 */
$.fn.eliminar = function() {
    $(this).remove();
    mostarVistaPrevia();
}
