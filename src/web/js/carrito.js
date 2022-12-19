class Carrito {
	constructor() {
		this.eventosCarrito();
	}
	eventosCarrito() {
		const modalCarrito = document.getElementById("carrito");

		let botonCarrito = document.getElementById("btnCarrito");
		botonCarrito.addEventListener("click", () => {
			modalCarrito.style.display = "block";
			modalCarrito.style.top = "150px";
			modalCarrito.style.marginTop = "0px";
		});
		let cerrar = document.getElementById("cerrarCarrito");
		cerrar.onclick = () => {
			modalCarrito.style.marginTop = "-1000px";
		};
	}
}
