import { cargaInicio } from "./main.js";
import { CARRITO } from "./main.js";
import { User } from "./auth.js";
import { showAlerta, displayBtnCancel } from "./alerta.js";
import { HISTORIAL } from "./login.js";
let btnLogin = null;
let btnCarrito = null;
let btnHistorial = null;
let btnInicio = null;
let CerrarSesion = false;

function setNav() {
	btnLogin = document.getElementById("btnLogin");
	btnCarrito = document.getElementById("btnCarrito");
	btnHistorial = document.getElementById("btnHistorial");
	btnInicio = document.getElementById("btn-nav-Inicio");
	let spanError = document.getElementById("login-error");

	const modalLogin = document.getElementById("login");
	const modalCarrito = document.getElementById("carrito");
	const modalHistorial = document.getElementById("historialCarrito");

	let topLogin = parseInt(modalLogin.offsetHeight) / 2;
	let topCarrito = parseInt(modalCarrito.offsetHeight) / 2;
	let topHistorial = parseInt(modalHistorial.offsetHeight) / 2;
	window.onresize = () => {
		topLogin = modalLogin.offsetHeight / 2;
		topCarrito = modalCarrito.offsetHeight / 2;
		topHistorial = modalHistorial.offsetHeight / 2;

		if (+window.getComputedStyle(modalLogin).top.slice(0, -2) > 0) {
			modalLogin.style.top = "calc(52vh - (" + topLogin + "px))";
		} else if (+window.getComputedStyle(modalCarrito).top.slice(0, -2) > 0) {
			modalCarrito.style.top = "calc(52vh - (" + topCarrito + "px))";
		} else if (+window.getComputedStyle(modalHistorial).top.slice(0, -2) > 0) {
			modalHistorial.style.top = "calc(52vh - (" + topHistorial + " px))";
		}
	};

	btnLogin.onclick = () => {
		if (!User.active) {
			modalLogin.style.top = "calc(52vh - (" + topLogin + "px))";

			toggleBtnsNav();
			spanError.innerHTML = "";
		} else {
			CerrarSesion = true;
			showAlerta("¿Seguro que quieres cerrar sesión?", false);
			displayBtnCancel();
		}
	};

	btnCarrito.onclick = () => {
		if (CARRITO.hayProductos() == true) {
			modalCarrito.style.top = "calc(52vh - (" + topCarrito + "px))";
			modalCarrito.scrollTop = 0;
			toggleBtnsNav();
			CARRITO.pintaProductos();
		} else {
			showAlerta("Anyade Productos al Carrito");
		}
	};

	btnHistorial.onclick = () => {
		if (!User.active) {
			showAlerta("Es necesario iniciar sesión");
			return;
		}

		if (!HISTORIAL.hayCarritos()) {
			showAlerta("Todavía no has realizado un pedido");
			return;
		}

		HISTORIAL.pintarHistorial();
		modalHistorial.style.top = "calc(" + 52 + "vh - (" + topHistorial + "px))";
		modalHistorial.scrollTop = 0;
		toggleBtnsNav("historial");
	};

	btnInicio.onclick = () => {
		cargaInicio();
	};
}

function setUsername(login = true) {
	if (login) {
		btnLogin.innerHTML = User.username;
	} else {
		btnLogin.innerHTML = '<i class="fas fa-user"></i>';
	}
}

function setCerrarSesionFalse() {
	CerrarSesion = false;
}

function toggleBtnsNav() {
	btnCarrito.disabled = !btnCarrito.disabled;
	btnHistorial.disabled = !btnHistorial.disabled;
	btnLogin.disabled = !btnLogin.disabled;
}

export {
	toggleBtnsNav,
	setNav,
	setUsername,
	CerrarSesion,
	setCerrarSesionFalse,
};
