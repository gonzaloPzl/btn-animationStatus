console.log("Hello word");

let btn = document.querySelector(".magicBtn");
let btnMagicIcon = document.querySelector(".magicBtn--magicIcon");
let btnLoaderIcon = document.querySelector(".magicBtn--loaderIcon");
let btnDoneIcon = document.querySelector(".magicBtn--doneIcon");

let btnText = document.querySelector(".magicBtn--text");

btn.addEventListener('click', () => {
  btn.style.pointerEvents = "none";
  btn.disabled = true;
  btnText.textContent = "Trabajando...";

  btnMagicIcon.classList.toggle("none");
  btnLoaderIcon.classList.toggle("none");
  btn.classList.add("magicBtn--status__loader");

  

  setTimeout(() => {
    btn.style.pointerEvents = "none";
    console.log("Está en el settimeout");
    btnLoaderIcon.classList.toggle("none");
    btnDoneIcon.classList.toggle("none");


    btn.classList.replace("magicBtn--status__loader" ,"magicBtn--status__done")
    btnText.textContent = "Listo";

  }, 2000)


  setTimeout(() => {
    btn.style = "";
    btn.disabled = false;
    btn.classList.remove("magicBtn--status__done");
    btnDoneIcon.classList.toggle("none");
    btnMagicIcon.classList.toggle("none");
    btnText.textContent = "Mejorar mi texto";
  }, 4000)



});

