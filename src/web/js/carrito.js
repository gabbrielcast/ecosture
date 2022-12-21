class Carrito {
	constructor() {
		this.animacionCarrito();
	}
	animacionCarrito() {
		const modalCarrito = document.getElementById("carrito");
		let btnLogin = document.getElementById("btnLogin");

		let cerrar = document.getElementById("cerrarCarrito");
		cerrar.onclick = quitarCarrito;

		let btnPagarCarrito = document.getElementById("pagarCarrito");
		btnPagarCarrito.onclick = () => {
			quitarCarrito();
			let pago = new Pago();
			pago.abrirPago();
		};

		function quitarCarrito() {
			activarBtnsNav("historial");
			modalCarrito.style.top = "-1000px";
		}
	}
}
