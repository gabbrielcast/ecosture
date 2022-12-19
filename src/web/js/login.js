function abrirLogin() {
	console.log("click");
}

function setLogin() {
	const modalLogin = document.getElementById("login");
	const botonLogin = document.getElementById("btnLogin");
	botonLogin.addEventListener("click", () => {
		modalLogin.style.marginTop = "0px";
	});

	const cancelar = document.getElementById("login-cancelar");
	cancelar.onclick = () => {
		modalLogin.style.marginTop = "-2000px";
	};
}
