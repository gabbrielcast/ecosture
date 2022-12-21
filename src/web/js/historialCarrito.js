class Historial {
	constructor() {
		this.setHistorial();
	}

	setHistorial() {
		let historial = document.getElementById("historialCarrito");

		let btnCerrar = document.getElementById("cerrarHistorial");
		btnCerrar.onclick = () => {
			activarBtnsNav("historial");
			historial.style.top = "-1000px";
		};
	}
}
