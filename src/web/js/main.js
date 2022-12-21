let carrito = null;
let historial = null;
function cargaInicio() {
	let contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";
	this.portada(contenedor);
	this.about(contenedor);
	this.testimonio(contenedor);
	this.categorias(contenedor);
}

function portada(contenedor) {
	let section = document.createElement("section");
	section.id = "hero";
	section.className = "c-hero";
	section.innerHTML = `
        <h1 class="c-hero__titulo">Moda <span>sostenible</span></h1>
        <h2 class="c-hero__subtitulo">
            Ropa ecológica - marcas locales - comercio justo
        </h2>
        <p class="c-hero__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            corrupti accusamus dolorum ipsa cupiditate perferendis esse atque
            earum quis sequi culpa voluptatem sit, voluptas nemo laudantium
            blanditiis eaque dicta architecto.
        </p>
        <div class="c-hero__iconos">
            <div class="c-icon c-icon--planeta"></div>
            <div class="c-icon c-icon--bombilla"></div>
            <div class="c-icon c-icon--hojas"></div>
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

function categorias(contenedor) {
	let section = document.createElement("section");
	section.id = "productos";

	section.innerHTML = `
    <h1 class="g--seccion-productos-title">CATEGORÍAS</h1>
					<div
						class="l-grid l-grid--columns-4 l-grid--gap-6 g--padding-horizontal-12 g--padding-vertical-8 g--padding-bottom-12"
					>
						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/mujer/camisetas/camiseta1.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
							
								<a class="c-button c-button--categoria" >Ver Categoria</a>
							</div>
						</div>

						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/hombre/camisetas/camiseta3.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								
								<a class="c-button c-button--categoria" >Ver Categoria</a>
							</div>
						</div>

						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/mujer/vestidos/vestido1.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								
								
								<a class="c-button c-button--categoria" >Ver Categoria</a>
							</div>
						</div>

						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/hombre/chaquetas/chaqueta4.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								
								<a class="c-button c-button--categoria" >Ver Categoria</a>
							</div>
						</div>
					</div>
    
    `;

	let btns = Array.from(section.getElementsByTagName("a"));
	btns.forEach((b) => {
		if (b.className.includes("c-button")) {
			b.onclick = () => {
				this.listProductos();
			};
		}
	});

	contenedor.appendChild(section);
}

//PRODUCTOS

function listProductos() {
	let contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";
	let section = document.createElement("section");
	section.id = "productos";

	section.innerHTML = `
    <h1 class="g--seccion-productos-title">LOREM IPSUM</h1>
					<div
						class="l-grid l-grid--auto-fill l-grid--gap-6 g--padding-horizontal-12 g--padding-vertical-8"
					>
						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/mujer/faldas/falda2.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								
								<p class="c-producto__price">19.99€</p>

								<div class="c-producto__botones">
									<div class="c-producto__anyade">
										
										<a class="c-button c-button--products" >
											<i class="fas fa-cart-plus"></i>
											Añadir
										 </a>
									</div>
									<div class="c-producto__ver">
										<a class="c-button c-button--products" >
										<i class="fas fa-search"></i>
											Ver producto
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/mujer/camisetas/camiseta2.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								
								<p class="c-producto__price">19.99€</p>
								<div class="c-producto__botones">
									<div class="c-producto__anyade">
									
									<a class="c-button c-button--products" >
									<i class="fas fa-cart-plus"></i>
									Añadir
								 </a>
							</div>
							<div class="c-producto__ver">
								<a class="c-button c-button--products" >
								<i class="fas fa-search"></i>
									Ver producto
								</a>
									</div>
								</div>
							</div>
						</div>

						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/mujer/camisetas/camiseta3.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								
								<p class="c-producto__price">19.99€</p>
								<div class="c-producto__botones">
									<div class="c-producto__anyade">
										
									
									<a class="c-button c-button--products" >
									<i class="fas fa-cart-plus"></i>
									Añadir
								 </a>
							</div>
							<div class="c-producto__ver">
								<a class="c-button c-button--products" >
								<i class="fas fa-search"></i>
									Ver producto
								</a>
									</div>
								</div>
							</div>
						</div>

						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/hombre/camisetas/camiseta4.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								
								<p class="c-producto__price">19.99€</p>
								<div class="c-producto__botones">
									<div class="c-producto__anyade">
									
									<a class="c-button c-button--products" >
									<i class="fas fa-cart-plus"></i>
									Añadir
								 </a>
							</div>
							<div class="c-producto__ver">
								<a class="c-button c-button--products" >
								<i class="fas fa-search"></i>
									Ver producto
								</a>
									</div>
								</div>
							</div>
						</div>

						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/hombre/camisetas/camiseta6.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								
								<p class="c-producto__price">19.99€</p>
								<div class="c-producto__botones">
									<div class="c-producto__anyade">
										
									
									<a class="c-button c-button--products" >
									<i class="fas fa-cart-plus"></i>
									Añadir
								 </a>
							</div>
							<div class="c-producto__ver">
								<a class="c-button c-button--products" >
								<i class="fas fa-search"></i>
									Ver producto
								</a>
									</div>
								</div>
							</div>
						</div>

						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/mujer/camisetas/camiseta7.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								
								<p class="c-producto__price">19.99€</p>
								<div class="c-producto__botones">
									<div class="c-producto__anyade">
										
									
									<a class="c-button c-button--products" >
									<i class="fas fa-cart-plus"></i>
									Añadir
								 </a>
							</div>
							<div class="c-producto__ver">
								<a class="c-button c-button--products" >
								<i class="fas fa-search"></i>
									Ver producto
								</a>
									</div>
								</div>
							</div>
						</div>

						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/mujer/camisetas/camiseta6.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								
								<p class="c-producto__price">19.99€</p>
								<div class="c-producto__botones">
									<div class="c-producto__anyade">
										
								
									<a class="c-button c-button--products" >
									<i class="fas fa-cart-plus"></i>
									Añadir
								 </a>
							</div>
							<div class="c-producto__ver">
								<a class="c-button c-button--products" >
								<i class="fas fa-search"></i>
									Ver producto
								</a>
									</div>
								</div>
							</div>
						</div>

						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/hombre/camisetas/camiseta12.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								
								<p class="c-producto__price">19.99€</p>
								<div class="c-producto__botones">
									<div class="c-producto__anyade">
										
									
									<a class="c-button c-button--products" >
									<i class="fas fa-cart-plus"></i>
									Añadir
								 </a>
							</div>
							<div class="c-producto__ver">
								<a class="c-button c-button--products" >
								<i class="fas fa-search"></i>
									Ver producto
								</a>
									</div>
								</div>
							</div>
						</div>
					</div>
    
    `;

	let btns = Array.from(section.getElementsByTagName("a"));
	btns.forEach((b) => {
		if (b.className.includes("c-button")) {
			b.onclick = () => {
				this.detalleProducto();
			};
		}
	});

	contenedor.appendChild(section);
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
}

function detalleProducto() {
	let contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";
	let section = document.createElement("section");
	section.className =
		"l-flex l-flex--direction-column l-flex--aling-items--center";
	section.innerHTML = `
		<div class="c-detalle">
			
			<img class="c-detalle__img" src="./assets/img/Ropa/hombre/camisetas/camiseta1.jpg"></img>
			<div class="c-detalle__info">
				<h2 class="c-detalle__titulo">Fusce eleifend diam</h2>	
				<span class="c-detalle__subtitulo">Phasellus tristique</span>
				<p class="c-detalle__descripcion">Vivamus volutpat euismod nibh vel volutpat. Maecenas vitae odio massa. Donec pharetra convallis neque at molestie. Aliquam eu sodales arcu. Morbi quis laoreet dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eleifend diam non vestibulum volutpat. Maecenas maximus placerat velit sed auctor.</p>
				<p class="c-detalle__precio"><del>500€</del> <span>300€</span></p>
				<div class="c-detalle__botones">
					<a class="c-button c-button--big">
						<i class="fas fa-cart-plus"></i>
						Añadir al Carrito</a>
					<a class="c-button c-button--medium">Volver</a>
				</div>
			
			</div>
		
		</div>
		
		
	
	
	`;
	contenedor.appendChild(section);
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
}

window.onload = () => {
	historial = new Historial();
	setNav();
	carrito = new Carrito();
	this.cargaInicio();
	setLogin();
};
