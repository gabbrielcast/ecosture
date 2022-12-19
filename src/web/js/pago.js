function abrirPago() {
	const modalPago = document.getElementById("pagarCarrito");
	modalPago.style.display = "block";
	console.log("click");
}

function botonPago() {
	const botonCarrito = document.getElementById("btnCarrito");
	botonCarrito.addEventListener("click", abrirCarrito);
	console.log("entra en boton");
}

function setPago() {}
