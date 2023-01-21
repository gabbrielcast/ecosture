import { toggleBtnsNav } from "./nav.js";
import { peticion } from "./peticion.js";
import { User } from "./auth.js";
import { CARRITO } from "./main.js";
export class Historial {
  constructor() {
    this.historial = null;
    this.setHistorial();
    this.carritos = [];
  }

  setHistorial() {
    this.historial = document.getElementById("historialCarrito");

    let btnCerrar = document.getElementById("cerrarHistorial");
    btnCerrar.onclick = () => {
      this.cerrar();
    };
  }

  cerrar() {
    toggleBtnsNav();
    this.historial.style.top = "-1000px";
  }

  hayCarritos() {
    return this.carritos.length > 0;
  }

  update() {
    peticion(
      "GET",
      "http://localhost:3000/historial?userId=" + User.id,
      false
    ).then((r) => {
      this.carritos = r;
    });
  }

  updateLocalStorage() {
    localStorage.setItem("historial", this.carritos);
  }

  async eliminarCarrito(id) {
    let index = this.carritos.findIndex((c) => c.id === id);
    this.carritos.splice(index, 1);

    await peticion("DELETE", "http://localhost:3000/historial/" + id);
    if (!this.hayCarritos()) {
      this.cerrar();
      return;
    }
    this.pintarHistorial();
  }

  pintarHistorial() {
    let historialContainer = document.getElementById("historialContainer");
    historialContainer.innerHTML = "";

    this.carritos.forEach((carrito) => {
      let carritoDOM = document.createElement("div");
      carritoDOM.innerHTML = `
				<div class="c-historialCarrito__item">
					<img id="historialDelete"
						class="c-historialCarrito__close"
						src="./assets/img/iconos/close.png"
						alt=""
					/>

					<div class="c-historialCarrito__numSerie">
						<span>Nº ${carrito.id} </span>
					</div>
	
					<div class="c-historialCarrito__descripcion">
						<span>${carrito.productos.length} producto(s)</span>
						<span>Tempus Fugit</span>
					</div>
	
					<div class="c-historialCarrito__precio">${carrito.precio}€</div>
				</div>
			`;

      carritoDOM.onclick = async () => {
        this.cerrar();
        toggleBtnsNav();
        CARRITO.vaciarProductos();

        let historial = await getHistorial(carrito);
        await addProductosCarrito(historial);
        CARRITO.abrir();
      };

      let btnEliminar = Array.from(
        carritoDOM.getElementsByClassName("c-historialCarrito__close")
      )[0];

      btnEliminar.onclick = (e) => {
        e.stopPropagation();
        this.eliminarCarrito(carrito.id);
      };

      historialContainer.appendChild(carritoDOM);
    });

    async function getHistorial(carrito) {
      return new Promise((resolve, reject) => {
        peticion("GET", "http://localhost:3000/historial?id=" + carrito.id)
          .then((r) => r[0])
          .then(async (r) => {
            resolve(r.productos);
          });
      });
    }

    async function addProductosCarrito(productosIds) {
      for (const productoID of productosIds) {
        let productoBD = await getProducto(productoID);
        let producto = {
          id: productoBD.id,
          nombre: productoBD.nombre,
          descripcion: productoBD.descripcion,
          precio: productoBD.precio,
          idCategoria: productoBD.idCategoria,
          unidades: productoID.unidades,
        };
        CARRITO.anyadeProducto(producto);
      }
    }

    async function getProducto(producto) {
      return new Promise((resolve, reject) => {
        peticion(
          "GET",
          "http://localhost:3000/productos?id=" + producto.id
        ).then((r) => resolve(r[0]));
      });
    }
  }
}
