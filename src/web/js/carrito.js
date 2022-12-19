class Carrito {
	constructor() {
		this.animacionCarrito();
	}
	animacionCarrito() {
		const modalCarrito = document.getElementById("carrito");

		let botonCarrito = document.getElementById("btnCarrito");
		botonCarrito.addEventListener("click", () => {
			modalCarrito.style.display = "block";
			modalCarrito.style.top = "120px";
			modalCarrito.style.marginTop = "0px";
			modalCarrito.style.visibility = "visible";
		});
		let cerrar = document.getElementById("cerrarCarrito");
		cerrar.onclick = () => {
			modalCarrito.style.marginTop = "-1000px";
			modalCarrito.style.visibility = "hidden";
		};
	}
}
