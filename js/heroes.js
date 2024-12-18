import * as utils from "./utilidades/utils.js";

const BASE_URL = 'https://valorant-api.com/v1';
const contenedor = document.querySelector('#containerHeroe');
const btnIzq = document.querySelector('#btnIzq');
const btnDer = document.querySelector('#btnDer');
let scrollAmount;
let screenActual;

async function cargarHeroes () {
	return await fetch(`${BASE_URL}/agents`).then((response) => response.json());
};

const addImage = (src, name, click) => {
    const agente = document.createElement('div');
    agente.className = 'agente';
    const h2 = document.createElement('h2');
    h2.textContent = name;
    const img = document.createElement('img');

    img.src = src;
    agente.onclick = click;

    img.classList.add(
		'w-full', 
		'object-contain'
	);

    agente.classList.add(
		'h-max', 
		'cursor-pointer', 
		'flex', 
		'flex-col', 
		'gap-0', 
		'sm:hover:bg-rose-500', 
		'hover:scale-105', 
		'transition-transform', 
		'duration-200'
	);

    agente.appendChild(h2);
    agente.appendChild(img);
    contenedor.appendChild(agente);
};

function clearImage() {
	const images = document.querySelectorAll('.agente'); 
	images.forEach(img => img.remove());
};

const cargar = (pantalla) => {
	try {
		cargarHeroes().then((data) => {
			data.data.forEach(agent => {
				if (agent.fullPortrait !== null) {
					let icono;
					if (pantalla === 'mobilePortrait') {
						icono = agent.displayIconSmall;
				
					} else {
						icono = agent.fullPortrait;
					};

					addImage(icono, agent.displayName, () => {
						localStorage.setItem('selectedAgent', JSON.stringify(agent));
						window.location.href = "./infoHeroe.html";
					});               
				};
			});

			const heroes = document.querySelectorAll('.agente');
			const nombre = document.querySelectorAll('.agente h2');
			const imgHeroe = document.querySelectorAll('.agente img');
			
			window.addEventListener('resize', utils.estilos(pantalla, heroes, nombre, imgHeroe));
			utils.estilos(pantalla, heroes, nombre, imgHeroe);
    	});

	} catch (error) {
		console.error('Hubo un error con los heroes:', error);
	};
};

const scrollAuto = (screen) => {
	btnIzq.addEventListener('click', () => {
		contenedor.scrollBy({left: -screen, behavior:'smooth'});
	});
	btnDer.addEventListener('click', () => {
        contenedor.scrollBy({left: screen, behavior:'smooth'});
    });
}

window.onresize = () => {
	scrollAmount= contenedor.offsetWidth;
	if (screenActual !== utils.calcScreen()) {
		clearImage();
		screenActual = utils.calcScreen();
		cargar(screenActual);
	};
	scrollAuto(scrollAmount);		
};
window.onload = () => {
	scrollAmount= contenedor.offsetWidth;
	clearImage();
	screenActual = utils.calcScreen();
	cargar(screenActual);
	scrollAuto(scrollAmount);
};


