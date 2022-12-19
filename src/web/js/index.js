//LOGIN
function abrirLogin() {
  const modalLogin = document.getElementById("login");
  modalLogin.style.display = "block";
  console.log("click");
}

function botonLogin() {
  const botonLogin = document.getElementById("btnLogin");
  botonLogin.addEventListener("click", abrirLogin);
  console.log("entra en boton");
}

//CARRITO

function abrirCarrito() {
  const modalCarrito = document.getElementById("carrito");
  modalCarrito.style.display = "block";
  console.log("click");
}

function botonCarrito() {
  const botonCarrito = document.getElementById("btnCarrito");
  botonCarrito.addEventListener("click", abrirCarrito);
  console.log("entra en boton");
}

//PAGO
function abrirPago() {
  const modalPago = document.getElementById("pagarCarrito");
  modalPago.style.display = "block";
  console.log("click");
}

function botonPago() {
  const botonCarrito = document.getElementById("btnCarrito");
  botonCarrito.addEventListener("click", abrirCarrito);
  console.log("entra en boton");
}

window.onload = function () {
  botonCarrito();
  botonLogin();
};
