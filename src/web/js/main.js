import { setNav, setUsername } from "./nav.js";
import { Historial } from "./historialCarrito.js";
import { Carrito } from "./carrito.js";
import { setLogin, Login, HISTORIAL, instantiateHISTORIAL } from "./login.js";
import { peticion } from "./peticion.js";
import { User, Auth, setIdCarrito, idCarrito } from "./auth.js";
import { textos } from "./textos.js";
import { confAlerta } from "./alerta.js";

let CARRITO = null;
async function cargaInicio() {
	let contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";
	portada(contenedor);
	about(contenedor);
	testimonio(contenedor);
	contenedor.style.opacity = 1;
	await categorias(contenedor);
	cantidadCarrito();
}

function cantidadCarrito() {
	let carrito = document.getElementById("btnCarrito");
	let totalArticulos = CARRITO.getProductos().length;
	carrito.innerHTML = `<i class="fas fa-shopping-cart c-nav__icono"></i> ${totalArticulos}`;
}

function portada(contenedor) {
	let section = document.createElement("section");
	section.id = "hero";
	section.className = "c-hero";
	section.innerHTML = `
        <h1 class="c-hero__titulo">${textos.hero.titulo}</h1>
        <h2 class="c-hero__subtitulo">${textos.hero.subtitulo}</h2>
        <p class="c-hero__texto">${textos.hero.descripcion}</p>
        <div class="c-hero__iconos">
            <div class="c-icon c-icon__circulo--planeta"></div>
            <div class="c-icon c-icon__circulo--bombilla"></div>
            <div class="c-icon c-icon__circulo--hojas"></div>
        </div>
    `;
	contenedor.appendChild(section);
}

function about(contenedor) {
	let section = document.createElement("section");
	section.id = "about";
	section.className = "c-about";

	section.innerHTML = `
    
        <div class="c-about__header">
            <h3 class="c-about__title">${textos.quienesSomos.titulo}</h3>
            <p class="c-about__text">${textos.quienesSomos.parrafo}
            </p>
        </div>
		<div class="c-about__body">
			<div class="c-icon">
				<img
					class="c-icon__img"
					src="./assets/img/iconos/salvar-plantas.png"
					alt="icono comercio justo"
				/>
				<h3 class="c-icon__title">${textos.quienesSomos.columnas.comercioJusto.titulo}</h3>
				<p class="c-icon__text">${textos.quienesSomos.columnas.comercioJusto.parrafo}</p>
			</div>
			<div class="c-icon">
				<img class="c-icon__img" src="./assets/img/iconos/ecologia.png" alt="" />
				<h3 class="c-icon__title">${textos.quienesSomos.columnas.organic.titulo}</h3>
				<p class="c-icon__text">${textos.quienesSomos.columnas.organic.parrafo}</p>
			</div>
			<div class="c-icon">
				<img
					class="c-icon__img"
					src="./assets/img/iconos/el-planeta-tierra.png"
					alt=""
				/>
				<h3 class="c-icon__title">${textos.quienesSomos.columnas.sostenible.titulo}</h3>
				<p class="c-icon__text">${textos.quienesSomos.columnas.sostenible.parrafo}</p>
			</div>
			<div class="c-icon">
				<img
					class="c-icon__img"
					src="./assets/img/iconos/vegano.png"
					alt="icono vegano"
				/>
				<h3 class="c-icon__title">${textos.quienesSomos.columnas.vegan.titulo}</h3>
				<p class="c-icon__text">${textos.quienesSomos.columnas.vegan.parrafo}</p>
			</div>
			<div class="c-icon">
				<img
					class="c-icon__img"
					src="./assets/img/iconos/reciclar-senal.png"
					alt="icono reciclaje"
				/>
				<h3 class="c-icon__title">${textos.quienesSomos.columnas.upcycling.titulo}</h3>
				<p class="c-icon__text">${textos.quienesSomos.columnas.upcycling.parrafo}
				</p>
			</div>
		</div>
    
    `;

	contenedor.appendChild(section);
}

function testimonio(contenedor) {
	let section = document.createElement("section");
	section.id = "testimonio";
	section.className = "c-testimonio";
	section.innerHTML = `
        <!-- <div class="c-testimonio__img"></div> -->
        <i class="fas fa-quote-right fa-4x"></i>
        <p class="c-testimonio__text">${textos.testimonio.parrafo}
        </p>
        <p class="c-testimonio__name">${textos.testimonio.autor}</p>
    
    `;

	contenedor.appendChild(section);
}

async function categorias(contenedor) {
	let section = document.createElement("section");
	section.id = "categorias";
	section.className = "ff";
	let titulo = document.createElement("h1");
	titulo.innerHTML = "CATEGORÍAS";
	titulo.className = "g--seccion-productos-title";
	section.appendChild(titulo);

	let contCategorias = document.createElement("div");
	contCategorias.className =
		"l-grid l-grid--auto-fit l-grid--gap-9 g--padding-horizontal-12 g--padding-vertical-8 g--padding-bottom-12";

	let categorias = await peticion("GET", "http://localhost:4000/api/categoria");

	categorias.forEach((categoriaBD) => {
		let categoria = document.createElement("div");
		categoria.className = "c-producto";

		categoria.innerHTML = `
			<img
				class="c-producto__img"
				src="./assets/img/categorias/c${categoriaBD.id}.jpg"
				alt=""
			/>
			<div class="c-producto__info">
				<h4 class="c-producto__title">${categoriaBD.nombre}</h4>
				<a id="${categoriaBD.id}" class="c-button c-button--categoria" >Ver Categoria</a>
			</div>
		
		`;

		let btn = Array.from(categoria.getElementsByTagName("a"))[0];

		btn.onclick = () => {
			listProductos(btn.id, categoriaBD.nombre);
		};
		contCategorias.appendChild(categoria);
	});

	section.appendChild(contCategorias);
	contenedor.appendChild(section);
}

//PRODUCTOS

async function listProductos(categoriaID, categoriaNombre) {
	let productos = await peticion(
		"GET",
		`http://localhost:4000/api/categoria/${categoriaID}/producto`
	);
	let contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";

	let titulo = document.createElement("h1");
	titulo.innerHTML = categoriaNombre;
	titulo.className = "g--seccion-productos-title";

	let section = document.createElement("section");
	section.id = "productos";
	section.appendChild(titulo);

	let contProductos = document.createElement("div");
	contProductos.className =
		"l-grid l-grid--auto-fill l-grid--gap-6 g--padding-horizontal-12 g--padding-vertical-8";

	productos.forEach((productoBD) => {
		let producto = document.createElement("div");
		producto.className = "c-producto";
		let genero =
			productoBD.id.split("").reverse()[0] === "m" ? "Mujer" : "Hombre";

		producto.innerHTML = `
			<img
				class="c-producto__img"
				src="./assets/img/Ropa/${genero}/${productoBD.id}.jpg"
				alt=""
			/>
			<div class="c-producto__info">
				<h4 class="c-producto__title">${productoBD.nombre}</h4>
				
				<p class="c-producto__price">${productoBD.precio}€</p>
				<div class="c-producto__botones">
					<div id="${productoBD.id}" class="c-producto__anyade">
						
						<a class="c-button c-button--products" >
							<i class="fas fa-cart-plus"></i>
							Añadir
							</a>
					</div>
					<div id="${productoBD.id}" class="c-producto__ver">
						<a  class="c-button c-button--products" >
						<i class="fas fa-search"></i>
							Ver producto
						</a>
					</div>
				</div>
			</div>
		`;

		let btnAnyadir = Array.from(
			producto.getElementsByClassName("c-producto__anyade")
		)[0];

		let btnVer = Array.from(
			producto.getElementsByClassName("c-producto__ver")
		)[0];

		btnAnyadir.onclick = () => {
			let productoCarrito = {
				id: productoBD.id,
				nombre: productoBD.nombre,
				descripcion: productoBD.descripcion,
				precio: productoBD.precio,
				idCategoria: productoBD.idCategoria,
				unidades: 1,
			};
			CARRITO.anyadeProducto(productoCarrito);
			cantidadCarrito();
		};

		btnVer.onclick = () => {
			detalleProducto(productoBD);
		};
		contProductos.appendChild(producto);
	});

	section.appendChild(contProductos);
	contenedor.appendChild(section);

	doScroll();
}

function detalleProducto(producto) {
	let contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";

	let section = document.createElement("section");
	section.id = "contenedor-detalle";
	section.className =
		"l-flex l-flex--direction-column l-flex--aling-items--center l-flex--justify-center";

	let detalle = document.createElement("div");
	detalle.className = "c-detalle";
	let genero = producto.id.split("").reverse()[0] === "m" ? "Mujer" : "Hombre";
	detalle.innerHTML = `	
		<img class="c-detalle__img" src="./assets/img/Ropa/${genero}/${producto.id}.jpg"></img>
		<div class="c-detalle__info">
			<h2 class="c-detalle__titulo">${producto.nombre}</h2>	
			<span class="c-detalle__subtitulo">${genero}</span>
			<p class="c-detalle__descripcion">${producto.descripcion}</p>
			<p class="c-detalle__precio"> <span>${producto.precio}€</span></p>
			<div class="c-detalle__botones">
				<a id="anyadirProducto" class="c-button c-button--big">
					<i class="fas fa-cart-plus"></i>
					Añadir al Carrito</a>
				<a  class="c-button c-button--medium c-button--bigCancelar">Volver</a>
			</div>
		</div>
	`;

	let btns = Array.from(detalle.getElementsByTagName("a"));

	btns.forEach((b) => {
		b.onclick = async () => {
			if (b.id === "anyadirProducto") {
				CARRITO.anyadeProducto({
					id: producto.id,
					nombre: producto.nombre,
					descripcion: producto.descripcion,
					precio: producto.precio,
					idCategoria: producto.idCategoria,
					unidades: 1,
				});
			} else {
				let categoria = await peticion(
					"GET",
					"http://localhost:4000/api/categoria/" + producto.id_categoria
				);

				listProductos(producto.id_categoria, categoria.nombre);
			}
		};
	});

	contenedor.appendChild(detalle);

	doScroll({
		top: 50,
		behavior: "smooth",
	});
}

function doScroll(conf = null) {
	let scroll = conf ?? {
		top: 0,
		behavior: "smooth",
	};
	window.scroll(scroll);
}

async function checkUserLogged() {
	let carrito = JSON.parse(localStorage.getItem("currentShop") ?? null);
	let autentificacion = JSON.parse(localStorage.getItem("Auth") ?? null);

	if (autentificacion != null) {
		Auth.accessToken = autentificacion.TokenAcceso;
		Auth.refreshToken = autentificacion.TokenRefresco;
	}

	if (carrito != null) {
		if (JSON.parse(localStorage.getItem("idCarrito"))) {
			setIdCarrito(JSON.parse(localStorage.getItem("idCarrito")));
		} else {
			setIdCarrito(Math.floor(Date.now() / 1000));
		}
		CARRITO.setProductos(carrito);
	}

	let usuario = JSON.parse(localStorage.getItem("user"));

	if (usuario === null) {
		return;
	}

	User.active = true;
	User.username = usuario.username;
	User.id = usuario.id;
	setUsername();
	instantiateHISTORIAL();
	// await HISTORIAL.update();
}

window.onload = () => {
	setNav();
	setLogin();
	confAlerta();
	cargaInicio();

	CARRITO = new Carrito();

	checkUserLogged();
	// Login();

	// let authLocal = JSON.parse(localStorage.getItem("Auth")).r;
	// Auth.accessToken = authLocal.TokenAcceso;
	// Auth.refreshToken = authLocal.TokenRefresco;

	// peticion("GET", "http://localhost/ecosture/api/peliculas", true)
	// 	.then((r) => console.log(r))
	// 	.catch((r) => console.log(r));
};
export { CARRITO, cargaInicio };
