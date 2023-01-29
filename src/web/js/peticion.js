import { User, Auth } from "./auth.js";

function peticion(metodo, url, authRequest = false, body = null) {
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.open(metodo, url);
		req.responseType = "json";
		req.setRequestHeader("Content-Type", "application/json");
		authRequest
			? req.setRequestHeader("Authorization", "Bearer " + Auth.accessToken)
			: "";

		req.send(body);
		req.onload = () => {
			if (req.status >= 200 && req.status <= 299) {
				resolve(req.response);
			} else if (
				req.status == 401 &&
				req.response.Error === "Access Token expirado"
			) {
				refresh(metodo, url, body).then((r) => resolve(r));
			} else {
				console.log(req.response);
				reject({
					Respuesta: { codigo: req.status, desc: req.response.Error },
				});
			}
		};
	});
}

function refresh(metodo, url, body) {
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.open("POST", "http://localhost:4000/api/refresh");
		req.responseType = "json";
		req.setRequestHeader("Authorization", "Bearer " + Auth.refreshToken);
		req.send(null);

		req.onload = () => {
			if (req.status >= 200 && req.status <= 299) {
				localStorage.setItem(
					"Auth",
					JSON.stringify({
						TokenAcceso: req.response.TokenAcceso,
						TokenRefresco: req.response.TokenRefresco,
					})
				);
				User.username = req.response.user;
				Auth.accessToken = req.response.TokenAcceso;
				Auth.refreshToken = req.response.TokenRefresco;

				resolve(peticion(metodo, url, true, body));
			} else if (
				req.status === 401 &&
				req.response.Error === "Refresh Token Expirado"
			) {
			}
		};
	});
}
export { peticion };
