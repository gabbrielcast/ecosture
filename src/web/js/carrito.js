import { toggleBtnsNav } from "./nav.js";
import { Pago } from "./pago.js";
export class Carrito {
	constructor() {
		this.animacionCarrito();
	}
	animacionCarrito() {
		const modalCarrito = document.getElementById("carrito");
		let btnLogin = document.getElementById("btnLogin");

		// let cerrar = document.getElementById("cerrarCarrito");
		// cerrar.onclick = quitarCarrito;

		let btnPagarCarrito = document.getElementById("pagarCarrito");
		let cerrar = document.getElementById("cerrarCarrito");

		cerrar.onclick = () => {
			quitarCarrito();
			toggleBtnsNav();
			// activarBtnsNav("carrito");
		};

		btnPagarCarrito.onclick = () => {
			quitarCarrito();
			let pago = new Pago();
			pago.abrirPago();
		};

		function quitarCarrito() {
			modalCarrito.style.top = "-1000px";
		}
	}
}
