class Pago {
	constructor() {
		this.cerrarPago();
	}
	abrirPago() {
		let modalPago = document.getElementById("pago");
		// modalPago.style.display = "block";
		modalPago.style.top = "120px";
	}

	cerrarPago() {
		let modalPago = document.getElementById("pago");
		let btnCancelar = document.getElementById("btnCancelarPago");
		btnCancelar.onclick = () => {
			modalPago.style.top = "-1200px";
			activarBtnsNav("carrito");
		};
		// modalPago.style.display = "block";
	}
}
