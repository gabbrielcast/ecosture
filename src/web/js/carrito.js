class Carrito {
	constructor() {
		this.animacionCarrito();
	}
	animacionCarrito() {
		const modalCarrito = document.getElementById("carrito");

		let botonCarrito = document.getElementById("btnCarrito");
		let btnLogin = document.getElementById("btnLogin");

		function quitarCarrito() {
			btnLogin.disabled = false;
			modalCarrito.style.marginTop = "-1000px";
			modalCarrito.style.visibility = "hidden";
		}

		botonCarrito.addEventListener("click", () => {
			btnLogin.disabled = true;
			// modalCarrito.style.display = "block";
			modalCarrito.style.top = "120px";
			modalCarrito.style.marginTop = "0px";
			modalCarrito.style.visibility = "visible";
		});

		let cerrar = document.getElementById("cerrarCarrito");
		cerrar.onclick = quitarCarrito;

		let btnPagarCarrito = document.getElementById("pagarCarrito");
		btnPagarCarrito.onclick = () => {
			quitarCarrito();
			let pago = new Pago();
			console.log(pago);
			pago.abrirPago();
		};
	}
}
