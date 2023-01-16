import { toggleBtnsNav, setUsername } from "./nav.js";
import { User, Auth } from "./auth.js";
import { peticion } from "./peticion.js";
import { Historial } from "./historialCarrito.js";
import { CARRITO } from "./main.js";

let modalLogin = null;
let HISTORIAL = null;
function setLogin() {
	modalLogin = document.getElementById("login");
	let loader = document.getElementById("loader-login");

	let spanError = document.getElementById("login-error");

	const cancelar = document.getElementById("login-cancelar");
	const acceder = document.getElementById("login-acceder");

	cancelar.onclick = cerrarLogin;
	acceder.onclick = function (e) {
		// console.log("iniciando sesion");
		loader.style.visibility = "visible";

		setTimeout(() => {
			Login()
				.then((r) => {
					// console.log("sesion iniciada", r);
					// HISTORIAL = new Historial();
					instantiateHISTORIAL();
					HISTORIAL.update();
					spanError.innerHTML = "";
					loader.style.visibility = "hidden";
					cerrarLogin();
					setUsername();
				})
				.catch((r) => {
					spanError.innerHTML = r;
					// console.log(r);
					loader.style.visibility = "hidden";
				});
		}, 2000);
	};
}

function Login(datos = null) {
	return new Promise((resolve, reject) => {
		let credenciales =
			datos ?? obtenerCredenciales() ?? reject("Introduce tus credenciales");
		let url =
			"http://localhost:3030/users?username=" +
			credenciales.usuario +
			"&password=" +
			credenciales.password;
		peticion("GET", url, JSON.stringify(credenciales))
			.then((r) => {
				console.log(r);
				localStorage.setItem("user", JSON.stringify(r[0]));
				User.active = true;
				User.username = r[0].username;
				User.id = r[0].id;
				resolve(r);
				// localStorage.setItem("Auth", JSON.stringify(r.datos));
				// Auth.accessToken = r.TokenAcceso;
				// Auth.refreshToken = r.TokenRefresco;
				// resolve(r.datos);
			})
			.catch((r) => reject(r.datos ?? "Credenciales Incorrectas"));
	});
}

function obtenerCredenciales() {
	let usuario = document.getElementById("login-usuario").value;
	let password = document.getElementById("login-contrasenya").value;

	if (usuario === "" || password === "") {
		return null;
	}
	return { usuario: usuario, password: password };
}

function cerrarSesion() {
	User.active = false;
	CARRITO.vaciarProductos();

	if (localStorage.getItem("user")) {
		localStorage.removeItem("user");
	}

	if (localStorage.getItem("currentShop")) {
		localStorage.removeItem("currentShop");
	}
}

function cerrarLogin() {
	toggleBtnsNav();
	modalLogin.style.top = "-2000px";
}

function abrirLogin() {
	modalLogin.style.top = "150px";
}

function instantiateHISTORIAL() {
	HISTORIAL = new Historial();
}
export {
	setLogin,
	Login,
	cerrarSesion,
	cerrarLogin,
	abrirLogin,
	HISTORIAL,
	instantiateHISTORIAL,
};
