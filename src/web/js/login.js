import { toggleBtnsNav } from "./nav.js";

export function setLogin() {
	const modalLogin = document.getElementById("login");

	const cancelar = document.getElementById("login-cancelar");
	cancelar.onclick = () => {
		toggleBtnsNav("login");

		modalLogin.style.top = "-2000px";
	};
}
