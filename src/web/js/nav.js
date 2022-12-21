let btnLogin = null;
let btnCarrito = null;
let btnHistorial = null;
let btnIncio = null;

function setNav() {
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
		desactivarBtnsNav("login");
	};

	btnCarrito.onclick = () => {
		// modalCarrito.style.marginTop = "0px";
		console.log("carrito");

		modalCarrito.style.top = "150px";
		desactivarBtnsNav("carrito");
	};

	btnHistorial.onclick = () => {
		console.log("historial");
		// modalHistorial.style.marginTop = "0px";
		modalHistorial.style.top = "150px";
		desactivarBtnsNav("historial");
	};

	btnInicio.onclick = () => {
		cargaInicio();
	};
}

function desactivarBtnsNav(btn) {
	switch (btn) {
		case "login":
			btnCarrito.disabled = true;
			btnHistorial.disabled = true;
			break;
		case "carrito":
			console.log("bueno");
			btnLogin.disabled = true;
			btnHistorial.disabled = true;
			break;

		case "historial":
			btnLogin.disabled = true;
			btnCarrito.disabled = true;
			break;
	}
}

function activarBtnsNav(btn) {
	switch (btn) {
		case "login":
			btnCarrito.disabled = false;
			btnHistorial.disabled = false;
			break;
		case "carrito":
			btnLogin.disabled = false;
			btnHistorial.disabled = false;
			break;

		case "historial":
			btnLogin.disabled = false;
			btnCarrito.disabled = false;
	}
}
