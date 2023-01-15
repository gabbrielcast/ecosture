import { toggleBtnsNav } from "./nav.js";
import { peticion } from "./peticion.js";
import { User } from "./auth.js";
export class Historial {
	constructor() {
		this.setHistorial();
		this.carritos = [];
	}

	setHistorial() {
		let historial = document.getElementById("historialCarrito");

		let btnCerrar = document.getElementById("cerrarHistorial");
		btnCerrar.onclick = () => {
			toggleBtnsNav();
			historial.style.top = "-1000px";
		};
	}

	hayCarritos() {
		return this.carritos.length > 0;
	}

	update() {
		peticion(
			"GET",
			"http://localhost:3030/historial?idUser=" + User.id,
			false
		).then((r) => {
			console.log(r);
			this.carritos = r;
		});
	}

	mostrarCarrito() {}

	pintarHistorial() {
		let historialContainer = document.getElementById("historialContainer");
		historialContainer.innerHTML = "";

		this.carritos.forEach((c) => {
			let carrito = document.createElement("div");

			carrito.innerHTML = `
				<div class="c-historialCarrito__item">
					<img
						class="c-historialCarrito__close"
						src="./assets/img/iconos/close.png"
						alt=""
					/>
					// <img
					// 	class="c-historialCarrito__img"
					// 	src="./assets/img/Ropa/mujer/sudaderas/sudadera4.jpg"
					// />
	
					<div class="c-historialCarrito__descripcion">
						<span>Lorem IpsumGGGGG</span>
						<span>Tempus Fugit</span>
						<span>Nº ${c.id} </span>
					</div>
	
					<div class="c-historialCarrito__precio">${c.precio}€</div>
				</div>
			
			`;
			historialContainer.appendChild(carrito);
		});
	}
}
