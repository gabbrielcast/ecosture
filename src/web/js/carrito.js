class Carrito {
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
			// activarBtnsNav("carrito");
		};

		btnPagarCarrito.onclick = () => {
			quitarCarrito();
			let pago = new Pago();
			pago.abrirPago();
		};

		function quitarCarrito() {
			activarBtnsNav("carrito");
			modalCarrito.style.top = "-1000px";
		}
	}
}
