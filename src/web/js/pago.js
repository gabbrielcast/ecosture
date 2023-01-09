import { toggleBtnsNav } from "./nav.js";
export class Pago {
	constructor() {
		this.cerrarPago();
	}
	abrirPago() {
		let modalPago = document.getElementById("pago");
		modalPago.style.top = "120px";
	}

	cerrarPago() {
		let modalPago = document.getElementById("pago");
		let btnCancelar = document.getElementById("btnCancelarPago");
		btnCancelar.onclick = () => {
			modalPago.style.top = "-1200px";
			toggleBtnsNav();
		};
	}
}
