import { setNav, setUsername } from "./nav.js";
import { Historial } from "./historialCarrito.js";
import { Carrito } from "./carrito.js";
import { setLogin, Login, HISTORIAL, instantiateHISTORIAL } from "./login.js";
import { peticion } from "./peticion.js";
import { User, Auth } from "./auth.js";
import { textos } from "./textos.js";
import { confAlerta } from "./alerta.js";

let CARRITO = null;
function cargaInicio() {
	let contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";
	portada(contenedor);
	about(contenedor);
	testimonio(contenedor);
	categorias(contenedor);
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
            <h3 class="c-about__title">Lorem ipsum dolor sit amet</h3>
            <p class="c-about__text">
            Quisque vulputate sem pulvinar nibh interdum dignissim. Vivamus id
            arcu porttitor, lacinia ipsum sit amet, vulputate erat. Ut dictum
            risus metus, et venenatis lectus efficitur quis. Sed placerat, erat
            eu fermentum euismod, justo lectus molestie sem, sed dapibus eros
            diam nec urna. Etiam magna ligula, eleifend a mi ac, maximus
            vulputate nunc. Quisque ut sapien eu nunc pretium molestie ac ac
            mauris. Fusce ultrices molestie justo id porta. Donec condimentum
            semper eleifend. Phasellus eu tempor risus. Mauris in bibendum
            purus. Donec justo quam, mollis vel leo nec, dignissim lacinia
            justo. Ut tincidunt vel turpis ut placerat. Sed ut rutrum elit.
            </p>
        </div>
		<div class="c-about__body">
			<div class="c-icon">
				<img
					class="c-icon__img"
					src="./assets/img/iconos/salvar-plantas.png"
					alt="icono comercio justo"
				/>
				<h3 class="c-icon__title">Comercio Justo</h3>
				<p class="c-icon__text">
				Integer rutrum lacinia nibh, ut porttitor justo vehicula at. Praesent aliquam ante augue, 
				ac sodales justo iaculis id. Nunc dictum maximus nunc eu tincidunt.
				</p>
			</div>
			<div class="c-icon">
				<img class="c-icon__img" src="./assets/img/iconos/ecologia.png" alt="" />
				<h3 class="c-icon__title">Organic</h3>
				<p class="c-icon__text">
				Integer rutrum lacinia nibh, ut porttitor justo vehicula at. Praesent aliquam ante augue, 
				ac sodales justo iaculis id. Nunc dictum maximus nunc eu tincidunt.
				</p>
			</div>
			<div class="c-icon">
				<img
					class="c-icon__img"
					src="./assets/img/iconos/el-planeta-tierra.png"
					alt=""
				/>
				<h3 class="c-icon__title">Sostenible</h3>
				<p class="c-icon__text">
				Integer rutrum lacinia nibh, ut porttitor justo vehicula at. Praesent aliquam ante augue, 
				ac sodales justo iaculis id. Nunc dictum maximus nunc eu tincidunt.
				</p>
			</div>
			<div class="c-icon">
				<img
					class="c-icon__img"
					src="./assets/img/iconos/vegano.png"
					alt="icono vegano"
				/>
				<h3 class="c-icon__title">Vegan</h3>
				<p class="c-icon__text">
				Integer rutrum lacinia nibh, ut porttitor justo vehicula at. Praesent aliquam ante augue, 
				ac sodales justo iaculis id. Nunc dictum maximus nunc eu tincidunt.
				</p>
			</div>
			<div class="c-icon">
				<img
					class="c-icon__img"
					src="./assets/img/iconos/reciclar-senal.png"
					alt="icono reciclaje"
				/>
				<h3 class="c-icon__title">Upcycling</h3>
				<p class="c-icon__text">
				Integer rutrum lacinia nibh, ut porttitor justo vehicula at. Praesent aliquam ante augue, 
				ac sodales justo iaculis id. Nunc dictum maximus nunc eu tincidunt.
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
        <p class="c-testimonio__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt labor et dolore magna aliqua ex commo
        consequat irure. Maecenas nec libero porta, elementum erat eget,
        pellentesque nulla. Curabitur sed sem quis metus vestibulum sodales
        pulvinar eget tortor. Praesent non felis magna. Fusce egestas sapien
        eu accumsan ultrices. Aliquam sed lacus mi. Aenean nisl tellus,
        consequat pulvinar lorem sed, volutpat finibus sapien.
        </p>
        <p class="c-testimonio__name">Donec Hendrerit</p>
    
    `;

	contenedor.appendChild(section);
}

async function categorias(contenedor) {
	let section = document.createElement("section");
	section.id = "categorias";
	let titulo = document.createElement("h1");
	titulo.innerHTML = "CATEGORÍAS";
	section.appendChild(titulo);

	let contCategorias = document.createElement("div");
	contCategorias.className =
		"l-grid l-grid--auto-fit l-grid--gap-6 g--padding-horizontal-12 g--padding-vertical-8 g--padding-bottom-12";

	let categorias = await peticion("GET", "http://localhost:3030/categorias");

	categorias.forEach((categoriaBD) => {
		let categoria = document.createElement("div");
		categoria.className = "c-producto";
		categoria.innerHTML = `
			<img
				class="c-producto__img"
				src="./assets/img/Ropa/mujer/camisetas/camiseta.jpg"
				alt=""
			/>
			<div class="c-producto__info">
				<h4 class="c-producto__title">${categoriaBD.nombre}</h4>
				<a id="${categoriaBD.id}" class="c-button c-button--categoria" >Ver Categoria</a>
			</div>
		
		`;

		let btn = Array.from(categoria.getElementsByTagName("a"))[0];

		btn.onclick = () => {
			listProductos(btn.id);
		};
		contCategorias.appendChild(categoria);
	});
	contenedor.appendChild(contCategorias);
}

//PRODUCTOS

async function listProductos(categoriaID) {
	let contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";
	let titulo = document.createElement("h1");
	titulo.className = "g--seccion-productos-title";

	let section = document.createElement("section");
	section.id = "productos";
	section.appendChild(titulo);

	let contProductos = document.createElement("div");
	contProductos.className =
		"l-grid l-grid--auto-fill l-grid--gap-6 g--padding-horizontal-12 g--padding-vertical-8";

	let productos = await peticion(
		"GET",
		"http://localhost:3030/productos?idCategoria=" + categoriaID
	);

	productos.forEach((productoBD) => {
		let producto = document.createElement("div");
		producto.className = "c-producto";
		producto.innerHTML = `
			<img
				class="c-producto__img"
				src="./assets/img/Ropa/mujer/faldas/falda2.jpg"
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
		};

		btnVer.onclick = () => {
			detalleProducto();
		};
		contProductos.appendChild(producto);
	});

	section.appendChild(contProductos);

	contenedor.appendChild(section);
	doScroll();
}

function detalleProducto() {
	let contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";
	let detalle = document.createElement("section");
	detalle.id = "contenedor-detalle";
	detalle.className =
		"l-flex l-flex--direction-column l-flex--aling-items--center l-flex--justify-center";
	detalle.innerHTML = `
		<div class="c-detalle">
			
			<img class="c-detalle__img" src="./assets/img/Ropa/hombre/camisetas/camiseta1.jpg"></img>
			<div class="c-detalle__info">
				<h2 class="c-detalle__titulo">Fusce eleifend diam</h2>	
				<span class="c-detalle__subtitulo">Phasellus tristique</span>
				<p class="c-detalle__descripcion">Vivamus volutpat euismod nibh vel volutpat. Maecenas vitae odio massa. Donec pharetra convallis neque at molestie. Aliquam eu sodales arcu. Morbi quis laoreet dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eleifend diam non vestibulum volutpat. Maecenas maximus placerat velit sed auctor.</p>
				<p class="c-detalle__precio"><del>500€</del> <span>300€</span></p>
				<div class="c-detalle__botones">
					<a id="anyadirProducto" class="c-button c-button--big">
						<i class="fas fa-cart-plus"></i>
						Añadir al Carrito</a>
					<a class="c-button c-button--medium">Volver</a>
				</div>
			
			</div>
		
		</div>
	`;

	contenedor.appendChild(detalle);
	let btnAnyadir = document.getElementById("anyadirProducto");
	btnAnyadir.onclick = () => {
		let num = Math.floor(Math.random() * 10);

		CARRITO.anyadeProducto({
			id: num,
			nombre: "prueba" + num,
			descripcion: "desc" + num,
			precio: 22,
			unidades: 1,
		});
	};
	doScroll({
		top: 125,
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

function checkUserLogged() {
	let carrito = JSON.parse(localStorage.getItem("currentShop"));

	if (carrito != null) {
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
	HISTORIAL.update();
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
