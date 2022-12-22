import { cargaInicio } from "./main.js";

let btnLogin = null;
let btnCarrito = null;
let btnHistorial = null;
let btnInicio = null;

export function setNav() {
	btnLogin = document.getElementById("btnLogin");
	btnCarrito = document.getElementById("btnCarrito");
	btnHistorial = document.getElementById("btnHistorial");
	btnInicio = document.getElementById("btn-nav-Inicio");

	const modalLogin = document.getElementById("login");
	const modalCarrito = document.getElementById("carrito");
	const modalHistorial = document.getElementById("historialCarrito");

	btnLogin.onclick = () => {
		// btnCarrito.disabled = true;
		// btnHistorial.disabled = true;
		// modalLogin.style.marginTop = "150px";
		console.log("login");
		modalLogin.style.top = "150px";
		toggleBtnsNav("login");
	};

	btnCarrito.onclick = () => {
		// modalCarrito.style.marginTop = "0px";
		console.log("carrito");

		modalCarrito.style.top = "150px";
		toggleBtnsNav("carrito");
	};

	btnHistorial.onclick = () => {
		console.log("historial");
		// modalHistorial.style.marginTop = "0px";
		modalHistorial.style.top = "150px";
		toggleBtnsNav("historial");
	};

	btnInicio.onclick = () => {
		cargaInicio();
	};
}

export function toggleBtnsNav(btn) {
	switch (btn) {
		case "login":
			btnCarrito.disabled = !btnCarrito.disabled;
			btnHistorial.disabled = !btnHistorial.disabled;
			break;
		case "carrito":
			console.log("bueno");
			btnLogin.disabled = !btnLogin.disabled;
			btnHistorial.disabled = !btnHistorial.disabled;
			break;

		case "historial":
			btnLogin.disabled = !btnLogin.disabled;
			btnCarrito.disabled = !btnCarrito.disabled;
			break;
	}
}
