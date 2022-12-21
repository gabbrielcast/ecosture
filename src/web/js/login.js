function setLogin() {
	const modalLogin = document.getElementById("login");

	const cancelar = document.getElementById("login-cancelar");
	cancelar.onclick = () => {
		activarBtnsNav("login");

		modalLogin.style.top = "-2000px";
	};
}
