import { toggleBtnsNav } from "./nav.js";
import { CARRITO } from "./main.js";
import { User } from "./auth.js";
import { peticion } from "./peticion.js";
import { HISTORIAL } from "./login.js";
export class Pago {
  constructor(productos, precio) {
    this.eventos();
    this.compra = productos;
    this.precio = precio;
  }
  abrirPago() {
    let modalPago = document.getElementById("pago");
    modalPago.style.top = "calc(50vh - (400px/2))";
  }

  eventos() {
    let btnCancelar = document.getElementById("btnCancelarPago");
    let btnPagar = document.getElementById("btnRealizarPago");
    btnPagar.onclick = () => this.pagar();
    btnCancelar.onclick = this.cerrarModal;
  }

  checkDatosPago() {
    let form = document.getElementById("pago-form");

    function verifyTarjeta(str) {
      return (
        /^[0-9]+$/.test(str) &&
        str.split("").length >= 13 &&
        str.split("").length <= 18
      );
    }

    function getActualMonth() {
      let today = new Date();

      return +today.toLocaleDateString().split("/").reverse()[1].split("")
        .length < 2
        ? "0" + today.toLocaleDateString().split("/")[1]
        : today.toLocaleDateString().split("/")[1];
    }

    function validDate(fecha) {
      let today = new Date();
      let mes = getActualMonth();

      let fechaHoy = today.getFullYear() + "" + mes + today.getDate();
      let userFecha = +fecha.split("-").join("");

      return userFecha - +fechaHoy >= 0;
    }

    let inputs = Array.from(form.getElementsByTagName("input"));
    let valid = true;
    inputs.every((input) => {
      if (input.value === "" || input.value === null) {
        input.setCustomValidity(input.name + " no válido");
        valid = false;
      } else if (input.id === "pago-cvc") {
        if (
          /^[0-9]+$/.test(input.value) === false ||
          input.value.split("").length !== 3
        ) {
          valid = false;
          input.setCustomValidity(
            "El CVC tiene que ser un número de 3 dígitos"
          );
        } else {
          input.setCustomValidity("");
        }
      } else if (input.id === "pago-tarjeta") {
        if (verifyTarjeta(input.value)) {
          input.setCustomValidity("");
        } else {
          valid = false;
          input.setCustomValidity(
            "La tarjeta ha de ser un número de entre 13 y 18 dígitos"
          );
        }
      } else if (input.type === "date") {
        valid = validDate(input.value);
        !valid
          ? input.setCustomValidity("La fecha no puede ser menor a la actual")
          : input.setCustomValidity("");
      } else {
        input.setCustomValidity("");
      }
      input.reportValidity();

      return valid;
    });

    return valid;
  }

  pagar() {
    if (!this.checkDatosPago()) {
      return;
    }
    let compra = this.compra.map((p) => {
      return { id: p.id, unidades: p.unidades };
    });
    let carro = { userId: User.id, productos: compra, precio: this.precio };
    peticion(
      "POST",
      "http://localhost:3000/historial",
      false,
      JSON.stringify(carro)
    ).then(async (r) => {
      await HISTORIAL.update();
      CARRITO.vaciarProductos();
      this.cerrarModal();
    });
    // post a historial solo con el id de usuario y el id de los productos
    // setTimeout(() => window.open("https://google.es"), 500);
  }

  cerrarModal() {
    let modalPago = document.getElementById("pago");
    modalPago.style.top = "-1000px";
    toggleBtnsNav();
  }
}
