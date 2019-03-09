/**
 * Inserta en el body la pagina html principal.
 * Es insertada al tener interacción con ella
 * @return {[type]} [description]
 */
function crearPagina(){
    $('body').append(`<div class="container">
      <!-- HEADER -->
      <div class="header">
          <a href="./proyecto/index.html" class="logo">Proyecto JQuery de Arturo</a>
          <div class="header-right">
              <a class="active" href="./index.html">Home</a>
              <a href="./about.html">Sobre nosotros</a>
          </div>
      </div>
      <!-- MENU -->
 <!-- CONTENIDOS  Curso-->
 <p class="display-4 text-center bg-primary text-white">INICIO</p>
 <div class="row justify-content-center">
   <div class="col-11">
       <p>Un sistema de gestión de contenidos o CMS (del inglés content management system) es un programa informático que permite crear un entorno de trabajo para la creación y administración de contenidos, principalmente en páginas web, por parte de los administradores, editores, participantes y demás usuarios.</p>
       <p>Cuenta con una interfaz que controla una o varias bases de datos donde se aloja el contenido del sitio web. El sistema permite manejar de manera independiente el contenido y el diseño. Así, es posible manejar el contenido y darle en cualquier momento un diseño distinto al sitio web sin tener que darle formato al contenido de nuevo, además de permitir la fácil y controlada publicación en el sitio a varios editores. Un ejemplo clásico es el de editores que cargan el contenido al sistema y otro de nivel superior (moderador o administrador) que permite que estos contenidos sean visibles a todo el público (los aprueba).</p>
        <p>CMS son las siglas de Content Management System, que se traduce directamente al español como Sistema Gestor de Contenidos.</p>
      </div>
 </div>

 <div class="row justify-content-center">
   <div class="col-11">
       <div class="row justify-content-around bg-light rounded p-3 m-2">
         <div class="col-md-3 position-relative">
           <img src="img/new.png" class="img-fluid rounded"/>
           <p class="text-center">
             Crea, diseña y personaliza tu propia página web desde cero.
           </p>
           <a href="./proyecto/index.html">Crea tu proyecto</a>
         </div>
         <div class="col-md-3 position-relative">
           <img src="img/about.png" class="img-fluid rounded"/>
           <p class="text-center">
             Si deseas conocernos mejor o quiere contactar con nosotros.
           </p>
           <a href="./about.html">Conocenos</a>
         </div>
         <div class="col-md-3 position-relative">
           <img src="img/git.png" class="img-fluid rounded"/>
           <p class="text-center">
             Usamos GitHub para realizar el control de versiones de la aplicación.
           </p>
           <a href="https://github.com/arturobarbaro/ProyectoJQuery">Código fuente del programa</a>
         </div>
       </div>
   </div>
 </div>
 <!-- CABECERA DE SECCIÓN -->
      <!-- PIE -->
      <div class="row bg-primary justify-content-center p-1">
        <div class="col-6 w-100">
          <p class="text-center text-white">
            Web desarrollada por Arturo Barba Rodríguez para el proyecto final de Diseño Web. Copyright © 2019
          </p>
        </div>
      </div>
      <div class="row bg-primary justify-content-center p-1">
        <div class="col-2 col-md-1">
          <img src="img/twitter.png" class="img-fluid" />
        </div>
        <div class="col-2 col-md-1">
          <img src="img/facebook.png" class="img-fluid" />
        </div>
        <div class="col-2 col-md-1">
          <img src="img/youtube.png" class="img-fluid" />
        </div>
      </div>
      </div>`);
}

/**
 * Carga la pagina inicial y desactiva el evento que llevaba asociado
 */
function inicio(){
    $(document).off('mousemove');
    crearPagina();
}

/**
 * Comprobamos que el documento esta cargado para asignar los eventos
 */
$(document).ready(function(){
    $(document).on('mousemove', inicio);
});
