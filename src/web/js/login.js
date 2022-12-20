function setLogin() {
	const modalLogin = document.getElementById("login");

	const botonLogin = document.getElementById("btnLogin");
	const botonCarrito = document.getElementById("btnCarrito");
	botonLogin.addEventListener("click", () => {
		botonCarrito.disabled = true;
		modalLogin.style.marginTop = "0px";
	});

	const cancelar = document.getElementById("login-cancelar");
	cancelar.onclick = () => {
		botonCarrito.disabled = false;

		modalLogin.style.marginTop = "-2000px";
	};
}
