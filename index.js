

const btn = document.querySelector(".magicBtn"); // botón general

const btnMagicIcon = document.querySelector(".magicBtn--magicIcon"); //icono de varita
const btnLoaderIcon = document.querySelector(".magicBtn--loaderIcon"); //icono de loader
const btnDoneIcon = document.querySelector(".magicBtn--doneIcon"); //icono de done

const btnText = document.querySelector(".magicBtn--text"); //texto del botón


btn.addEventListener('click', () => {

  // BLOQUE DE EJECUCIÓN AL DAR CLICK (ESTADO LOADING)

  btn.style.pointerEvents = "none"; // se desactiva el cursor pointer
  btn.disabled = true; // se desactiva el botón para que no se pueda volver a clickear
  btnText.textContent = "Trabajando..."; // se cambia el texto por Trabajando...

  btnMagicIcon.classList.toggle("none"); // se esconde el icono de la varita
  btnLoaderIcon.classList.toggle("none"); // se muestra el icono del loader
  btn.classList.add("magicBtn--status__loader"); // clase de estado de carga

  // BLOQUE DE EJECUCIÓN AL DAR CLICK FIN

  
  // Por motivos de prueba se utiliza timeout para el fetch a la api

  setTimeout(() => {

    // BLOQUE DE EJECUCIÓN ESTADO DONE
    btnLoaderIcon.classList.toggle("none"); 
    btnDoneIcon.classList.toggle("none"); 

    btn.classList.replace("magicBtn--status__loader" ,"magicBtn--status__done") // clase de estado done
    btnText.textContent = "Listo"; // se cambia el texto por 'Listo'
    // BLOQUE DE EJECUCIÓN ESTADO DONE

  }, 4000)


  setTimeout(() => {
    // BLOQUE DE EJECUCIÓN PARA VOLVER AL ESTADO DEFAULT
    btn.style = ""; // se limpian los estilos 
    btn.disabled = false; 
    btn.classList.remove("magicBtn--status__done");
    btnDoneIcon.classList.toggle("none"); 
    btnMagicIcon.classList.toggle("none");
    btnText.textContent = "Mejorar mi texto";
    // BLOQUE DE EJECUCIÓN PARA VOLVER AL ESTADO DEFAULT FIN
  }, 6000)



});

