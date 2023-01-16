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

	pagar() {
		let compra = this.compra.map((p) => {
			return { id: p.id, unidades: p.unidades };
		});
		let carro = { idUser: User.id, productos: compra, precio: this.precio };

		peticion(
			"POST",
			"http://localhost:3030/historial",
			false,
			JSON.stringify(carro)
		).then((r) => {
			HISTORIAL.update();
			CARRITO.vaciarProductos();
			this.cerrarModal();
		});

		//post a historial solo con el id de usuario y el id de los productos
		// setTimeout(() => window.open("https://google.es"), 500);
	}

	cerrarModal() {
		let modalPago = document.getElementById("pago");
		modalPago.style.top = "-1000px";
		toggleBtnsNav();
	}
}
