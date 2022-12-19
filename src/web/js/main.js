let carrito = null;
function cargaInicio() {
	let contenedor = document.getElementById("contenedor");

	this.portada(contenedor);
	this.about(contenedor);
	this.testimonio(contenedor);
	this.productos(contenedor);
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
            <div class="c-icon__circulo--planeta"></div>
            <div class="c-icon__circulo--bombilla"></div>
            <div class="c-icon__circulo--hojas"></div>
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
					Queremos, que cada ser humano tenga un salario justo por su
					trabajo. Esto es fundamental para elegir las mejores marcas de
					ropa ecologica.
				</p>
			</div>

			<div class="c-icon">
				<img class="c-icon__img" src="./assets/img/iconos/ecologia.png" alt="" />
				<h3 class="c-icon__title">Organic</h3>
				<p class="c-icon__text-card">
					Organic significa natural, ésta es la palabra clave para nuestra
					selección de moda ecologica con los mejores materiales ecológicos.
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
					Significa para nosotros pensar y actuar a largo plazo, con
					productos que duran por su calidad y diseño en tiempo. Todo es
					uno, cuidar el medioambiente, el ser humano y los animales. Es
					moda sostenible
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
					No queremos que se sacrifiquen animales o que éstos sean
					maltratados.
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
					En nuestra tienda encuentras productos que están fabricados con
					materiales reciclados para generar una ideología sana.
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

function productos(contenedor) {
	let section = document.createElement("section");
	section.id = "productos";

	section.innerHTML = `
    <h1 class="g--seccion-productos-title">ARTÍCULOS</h1>
					<div
						class="l-grid l-grid--align-content l-grid--gap-6 g--padding-12 g--padding-14"
					>
						<div class="c-producto">
							<img
								class="c-producto__img"
								src="./assets/img/Ropa/mujer/camisetas/camiseta1.jpg"
								alt=""
							/>
							<div class="c-producto__info">
								<h4 class="c-producto__title">LOREM IPSUM</h4>
								<p class="c-producto__text">
									Nam sit amet ipsum eget ipsum tincidunt pretium sit amet
									scelerisque velit. Aliquam porta turpis sed tincidunt
									placerat.
								</p>
								<p class="c-producto__price">19.99€</p>
								<a class="c-button__primary" href="#">Añadir</a>
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
								<p class="c-producto__text">
									Nam sit amet ipsum eget ipsum tincidunt pretium sit amet
									scelerisque velit. Aliquam porta turpis sed tincidunt
									placerat.
								</p>
								<p class="c-producto__price">19.99€</p>
								<a class="c-button__primary" href="#">Añadir</a>
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
								<p class="c-producto__text">
									Nam sit amet ipsum eget ipsum tincidunt pretium sit amet
									scelerisque velit. Aliquam porta turpis sed tincidunt
									placerat.
								</p>
								<p class="c-producto__price">19.99€</p>
								<a class="c-button__primary" href="#">Añadir</a>
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
								<p class="c-producto__text">
									Nam sit amet ipsum eget ipsum tincidunt pretium sit amet
									scelerisque velit. Aliquam porta turpis sed tincidunt
									placerat.
								</p>
								<p class="c-producto__price">19.99€</p>
								<a class="c-button__primary" href="#">Añadir</a>
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
								<p class="c-producto__text">
									Nam sit amet ipsum eget ipsum tincidunt pretium sit amet
									scelerisque velit. Aliquam porta turpis sed tincidunt
									placerat.
								</p>
								<p class="c-producto__price">19.99€</p>
								<a class="c-button__primary" href="#">Añadir</a>
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
								<p class="c-producto__text">
									Nam sit amet ipsum eget ipsum tincidunt pretium sit amet
									scelerisque velit. Aliquam porta turpis sed tincidunt
									placerat.
								</p>
								<p class="c-producto__price">19.99€</p>
								<a class="c-button__primary" href="#">Añadir</a>
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
								<p class="c-producto__text">
									Nam sit amet ipsum eget ipsum tincidunt pretium sit amet
									scelerisque velit. Aliquam porta turpis sed tincidunt
									placerat.
								</p>
								<p class="c-producto__price">19.99€</p>
								<a class="c-button__primary" href="#">Añadir</a>
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
								<p class="c-producto__text">
									Nam sit amet ipsum eget ipsum tincidunt pretium sit amet
									scelerisque velit. Aliquam porta turpis sed tincidunt
									placerat.
								</p>
								<p class="c-producto__price">19.99€</p>
								<a class="c-button__primary" href="#">Añadir</a>
							</div>
						</div>
					</div>
    
    `;

	contenedor.appendChild(section);
}

window.onload = () => {
	carrito = new Carrito();
	this.cargaInicio();
	setLogin();
};
