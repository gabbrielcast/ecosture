import { CerrarSesion, setCerrarSesionFalse, setUsername } from "./nav.js";
import { cerrarSesion } from "./login.js";
let alerta = null;
let visible = false;
let timeout = null;
let btnCancelar = null;
function showAlerta(mensaje, disappear = true) {
  alerta = document.getElementById("alerta");
  let title = document.getElementById("alertaTitulo");
  btnCancelar = document.getElementById("btnAlertaCancelar");

  title.innerHTML = mensaje;
  alerta.style.top = "100px";

  if (disappear) {
    timeout = setTimeout(() => {
      if (visible) {
        closeAlerta();
      }
    }, 8000);
  }

  visible = true;
}

function displayBtnCancel() {
  btnCancelar.onclick = () => {
    setCerrarSesionFalse();
    closeAlerta();
    setTimeout(() => {
      btnCancelar.style.display = "none";
    }, 200);

    visible = false;
  };

  btnCancelar.style.display = "block";
}

function closeAlerta() {
  alerta.style.top = "-500px";
}

function confAlerta() {
  let btnAceptar = document.getElementById("btnAlertaAceptar");
  btnAceptar.onclick = () => {
    if (CerrarSesion) {
      cerrarSesion();
      setCerrarSesionFalse();
      setUsername(false);
    }
    closeAlerta();
    // btnCancelar.style.display = "none";

    clearTimeout(timeout);
    visible = false;

    setTimeout(() => {
      window.getComputedStyle(btnCancelar).display === "block"
        ? (btnCancelar.style.display = "none")
        : "";
    }, 200);
  };
}

export { showAlerta, displayBtnCancel, confAlerta };
