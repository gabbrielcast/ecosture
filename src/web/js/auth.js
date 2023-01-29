let User = { id: null, active: false, username: "" };

let Auth = { accessToken: "", refreshToken: "" };

let idCarrito = null;

function setIdCarrito(id) {
	localStorage.setItem("idCarrito", JSON.stringify(id));
	idCarrito = id;
}
export { User, Auth, idCarrito, setIdCarrito };
