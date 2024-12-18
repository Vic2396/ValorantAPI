import * as utils from "./utilidades/utils.js";

const titulo = document.querySelector('#titulo');
const contenedor = document.querySelector('#img');
const habilidades = document.querySelector('#habilidades');
let screenActual;

const addImage = (src, container, w, bg, bgDark) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('cursor-pointer', w, bg, bgDark);
    container.appendChild(img);
};

function clearImage() {
	const imagen = document.querySelectorAll('#img img'); 
	imagen.remove();
};

const addAbilities = (data) => {
    const habilidad = document.createElement('div');
    habilidad.classList.add(
        'h-30',
        'w-1/3',
        '2xl:w-40', 
        'flex', 
        'flex-col', 
        'gap-1', 
        'items-center', 
        'bg-slate-500', 
        'dark:bg-slate-800', 
        'p-1', 
        'rounded'
    );

    const name = document.createElement('h3');
    name.classList.add(
        'w-max', 
        'text-md', 
        'lg:text-xl',
        'font-bold', 
        'text-center'
    );
    name.textContent = data.displayName;

    habilidad.appendChild(name);
    addImage(data.displayIcon, habilidad, 'w-16', 'snap-start');
    
    habilidades.appendChild(habilidad);
};

const cargar = (pantalla, agent) => {
    let icono;
    if (pantalla === 'mobile' || pantalla === 'mobilePortrait') {
        icono = agent.displayIconSmall;

    } else {
        icono = agent.fullPortrait;
    };
    addImage(icono, contenedor); 
}
document.addEventListener('DOMContentLoaded', () => {
    const agentData = localStorage.getItem('selectedAgent');
    const agent = JSON.parse(agentData);
    titulo.textContent = agent.displayName;

    cargar(utils.calcScreen(), agent);
    agent.abilities.forEach(data => {
        if (data.displayIcon !== null) {
            addAbilities(data);
        }
    });
});

window.addEventListener('resize', () => {
    if (screenActual !== utils.calcScreen()) {
        clearImage();
        screenActual = utils.calcScreen();
        cargar(screenActual, agent);
    };
});