import { cargaInicio } from "./main.js";
import { CARRITO } from "./main.js";
import { User } from "./auth.js";

let btnLogin = null;
let btnCarrito = null;
let btnHistorial = null;
let btnInicio = null;

function setNav() {
	btnLogin = document.getElementById("btnLogin");
	btnCarrito = document.getElementById("btnCarrito");
	btnHistorial = document.getElementById("btnHistorial");
	btnInicio = document.getElementById("btn-nav-Inicio");
	let spanError = document.getElementById("login-error");

	const modalLogin = document.getElementById("login");
	const modalCarrito = document.getElementById("carrito");
	const modalHistorial = document.getElementById("historialCarrito");

	btnLogin.onclick = () => {
		if (!User.active) {
			modalLogin.style.top = "calc(50vh - (200px))";
			toggleBtnsNav("login");
			spanError.innerHTML = "";
		}
	};

	btnCarrito.onclick = () => {
		if (CARRITO.hayProductos() == true) {
			modalCarrito.style.top = "calc(50vh - (250px))";
			toggleBtnsNav("carrito");
			CARRITO.pintaProductos();
		}
	};

	btnHistorial.onclick = () => {
		modalHistorial.style.top = "calc(50vh - (250px))";
		toggleBtnsNav("historial");
	};

	btnInicio.onclick = () => {
		cargaInicio();
	};
}

function setUsername() {
	btnLogin.innerHTML = User.username;
}

function toggleBtnsNav() {
	btnCarrito.disabled = !btnCarrito.disabled;
	btnHistorial.disabled = !btnHistorial.disabled;
	btnLogin.disabled = !btnLogin.disabled;
}

export { toggleBtnsNav, setNav, setUsername };
