import { toggleBtnsNav } from "./nav.js";
import { Pago } from "./pago.js";
export class Carrito {
	constructor() {
		this.modalCarrito = document.getElementById("carrito");
		this.productos = [];
		this.animacionCarrito();
	}
	hayProductos() {
		return this.productos.length > 0;
	}

	precioTotal() {
		let precioTotal = this.productos
			.map((p) => p.precio * p.unidades)
			.reduce((a, s) => a + s);

		return precioTotal;
	}
	animacionCarrito() {
		let btnPagarCarrito = document.getElementById("pagarCarrito");
		let cerrar = document.getElementById("cerrarCarrito");

		cerrar.onclick = () => {
			this.quitarCarrito();
			toggleBtnsNav();
			// activarBtnsNav("carrito");
		};

		btnPagarCarrito.onclick = () => {
			this.quitarCarrito();
			let pago = new Pago();
			pago.abrirPago();
		};
	}
	quitarCarrito() {
		this.modalCarrito.style.top = "-1000px";
	}
	anyadeProducto(producto) {
		let existe = this.productos.find((a) => a.codigo == producto.codigo);
		existe == undefined ? this.productos.push(producto) : existe.unidades++;
	}

	eliminarProducto(codigo) {
		let index = this.productos.findIndex((p) => p.codigo === +codigo);
		this.productos.splice(index, 1);

		if (!this.hayProductos()) {
			this.quitarCarrito();
			toggleBtnsNav();
			return;
		}
		this.pintaProductos();
	}

	modificaUnidades(codigo, op) {
		let producto = this.productos.find((p) => p.codigo === +codigo);

		if (op === "minus" && producto.unidades >= 1) {
			producto.unidades--;
			if (producto.unidades == 0) {
				let index = this.productos.findIndex((p) => p.codigo === +codigo);
				this.productos.splice(index, 1);
			}
		} else if (op === "plus") {
			producto.unidades++;
		}
		if (!this.hayProductos()) {
			this.quitarCarrito();
			toggleBtnsNav();
			return;
		}
		this.pintaProductos();
	}

	pintaProductos() {
		let contCarrito = document.getElementById("carritoContainer");

		contCarrito.innerHTML = "";

		this.productos.forEach((p) => {
			let producto = document.createElement("div");
			producto.innerHTML = `
			<div id="${p.codigo}" class="c-carrito__item">
				<img id="p-eliminar"
					class="c-carrito__close"
					src="./assets/img/iconos/close.png"
					alt=""
				/>
				<img
					class="c-carrito__img"
					src="./assets/img/Ropa/hombre/camisetas/camiseta8.jpg"
				/>
	
				<div class="c-carrito__descripcion">
					<span>${p.nombre}</span>
					<span>${p.descripcion}</span>
					<span>categoria</span>
				</div>
	
				<div class="c-carrito__cantidad">
					<img id="p-minus"
						class="c-icon c-icon--cantidad c-icon--minus"
						src="./assets/img/iconos/minus.png"
						alt=""
					/>
	
					<input class="c-carrito__input" type="number" name="name" value="${p.unidades}" />
	
					<img id="p-plus"
						class="c-icon c-icon--cantidad c-icon--plus"
						src="./assets/img/iconos/plus.png"
						alt=""
					/>
				</div>
	
				<div class="c-carrito__precio-item">${p.precio}€</div>
			</div>
			`;

			let btnsCantidad = Array.from(producto.getElementsByClassName("c-icon"));
			btnsCantidad.forEach((bt) => {
				bt.onclick = () => {
					let op = bt.className
						.split(" ")
						.reverse()[0]
						.split("--")
						.reverse()[0];
					this.modificaUnidades(p.codigo, op);
				};
			});

			let btnEliminar = Array.from(producto.getElementsByTagName("img")).filter(
				(img) => {
					img.id === "p-eliminar";
					return [img];
				}
			);
			btnEliminar[0].onclick = () => {
				this.eliminarProducto(p.codigo);
			};
			contCarrito.appendChild(producto);
		});

		let precioTotal = document.getElementById("carritoPrecio");
		precioTotal.innerHTML = this.precioTotal() + "€";
	}
}
