import { cargaInicio } from "./main.js";

let btnLogin = null;
let btnCarrito = null;
let btnHistorial = null;
let btnInicio = null;

function setNav() {
	btnLogin = document.getElementById("btnLogin");
	btnCarrito = document.getElementById("btnCarrito");
	btnHistorial = document.getElementById("btnHistorial");
	btnInicio = document.getElementById("btn-nav-Inicio");

	const modalLogin = document.getElementById("login");
	const modalCarrito = document.getElementById("carrito");
	const modalHistorial = document.getElementById("historialCarrito");

	btnLogin.onclick = () => {
		modalLogin.style.top = "150px";
		toggleBtnsNav("login");
	};

	btnCarrito.onclick = () => {
		modalCarrito.style.top = "150px";
		toggleBtnsNav("carrito");
	};

	btnHistorial.onclick = () => {
		modalHistorial.style.top = "150px";
		toggleBtnsNav("historial");
	};

	btnInicio.onclick = () => {
		cargaInicio();
	};
}

function toggleBtnsNav() {
	btnCarrito.disabled = !btnCarrito.disabled;
	btnHistorial.disabled = !btnHistorial.disabled;
	btnLogin.disabled = !btnLogin.disabled;
}

export { toggleBtnsNav, setNav };
