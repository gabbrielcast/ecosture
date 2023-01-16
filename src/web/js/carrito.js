import { User } from "./auth.js";
import { toggleBtnsNav } from "./nav.js";
import { Pago } from "./pago.js";
import { abrirLogin } from "./login.js";
export class Carrito {
	constructor() {
		this.modalCarrito = document.getElementById("carrito");
		this.productos = [];
		this.animacionCarrito();
	}
	animacionCarrito() {
		let cerrar = document.getElementById("cerrarCarrito");

		cerrar.onclick = () => {
			this.quitarCarrito();
			toggleBtnsNav();
		};

		this.setPago();
	}

	abrir() {
		this.pintaProductos();
		let topCarrito = parseInt(this.modalCarrito.offsetHeight) / 2;
		this.modalCarrito.style.top = "calc(52vh - (" + topCarrito + "px))";
		this.modalCarrito.scrollTop = 0;
	}

	quitarCarrito() {
		this.modalCarrito.style.top = "-1000px";
	}

	vaciarProductos() {
		this.productos = [];
	}

	setProductos(productos) {
		this.productos = productos;
	}

	getProductos() {
		return this.productos;
	}

	saveCarritoOnLocalStorage() {
		localStorage.setItem("currentShop", JSON.stringify(this.productos));
	}

	setPago() {
		let btnPagarCarrito = document.getElementById("pagarCarrito");

		btnPagarCarrito.onclick = () => {
			this.quitarCarrito();
			if (User.active) {
				let pago = new Pago(this.productos, this.precioTotal());
				pago.abrirPago();
			} else {
				abrirLogin();
			}
		};
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

	anyadeProducto(producto) {
		let existe = this.productos.find((a) => a.id == producto.id);
		existe == undefined ? this.productos.push(producto) : existe.unidades++;
		this.saveCarritoOnLocalStorage();
	}

	eliminarProducto(codigo) {
		let index = this.productos.findIndex((p) => p.id === +codigo);
		this.productos.splice(index, 1);

		if (!this.hayProductos()) {
			this.quitarCarrito();
			toggleBtnsNav();
			return;
		}
		this.pintaProductos();
	}

	modificaUnidades(codigo, op) {
		let producto = this.productos.find((p) => p.id === +codigo);

		if (op === "minus" && producto.unidades >= 1) {
			producto.unidades--;
			if (producto.unidades == 0) {
				let index = this.productos.findIndex((p) => p.id === +codigo);
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

		this.saveCarritoOnLocalStorage();

		this.productos.forEach((p) => {
			let producto = document.createElement("div");
			producto.id = p.id;
			producto.className = "c-carrito__item";
			producto.innerHTML = `
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
			
			`;

			let btnsCantidad = Array.from(producto.getElementsByClassName("c-icon"));
			btnsCantidad.forEach((bt) => {
				bt.onclick = () => {
					let op = bt.className
						.split(" ")
						.reverse()[0]
						.split("--")
						.reverse()[0];
					this.modificaUnidades(p.id, op);
				};
			});

			let btnEliminar = Array.from(producto.getElementsByTagName("img")).filter(
				(img) => {
					img.id === "p-eliminar";
					return [img];
				}
			);
			btnEliminar[0].onclick = () => {
				this.eliminarProducto(p.id);
			};
			contCarrito.appendChild(producto);
		});

		let precioTotal = document.getElementById("carritoPrecio");
		precioTotal.innerHTML = this.precioTotal() + "€";
	}
}
