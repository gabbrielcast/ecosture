import { toggleBtnsNav } from "./nav.js";
import { User, Auth } from "./auth.js";
import { peticion } from "./peticion.js";

let modalLogin = null;

function setLogin() {
	modalLogin = document.getElementById("login");

	const cancelar = document.getElementById("login-cancelar");
	const acceder = document.getElementById("login-acceder");

	cancelar.onclick = cerrarLogin;

	acceder.onclick = () => {
		console.log("iniciando sesion");
		Login().then((r) => {
			console.log("sesion iniciada", r);
			cerrarLogin();
		});
	};
}

function Login(datos = null) {
	return new Promise((resolve, reject) => {
		peticion(
			"POST",
			"http://localhost/ecosture/auth/login",
			false,
			JSON.stringify({ username: "admin", password: "ecosture" })
		)
			.then((r) => {
				localStorage.setItem("Auth", JSON.stringify(r.datos));
				User.username = r.user;
				Auth.accessToken = r.TokenAcceso;
				Auth.refreshToken = r.TokenRefresco;
				resolve(r.datos);
			})
			.catch((r) => reject(r.datos));
	});
}

function cerrarLogin() {
	toggleBtnsNav();
	modalLogin.style.top = "-2000px";
}

function abrirLogin() {
	toggleBtnsNav();
	modalLogin.style.top = "150px";
}
export { setLogin, Login, cerrarLogin, abrirLogin };
