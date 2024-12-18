const BASE_URL = 'https://valorant-api.com/v1';
const contenedor = document.querySelector('#containerMap');

async function cargarMapas () {
    return await fetch(`${BASE_URL}/maps`).then((response) => response.json());
};

const addImage = (src, name) => {
    const mapa = document.createElement('div');
    mapa.className = 'mapa';
    const h2 = document.createElement('h2');
    h2.textContent = name;
    const img = document.createElement('img');
    img.src = src;
    
    mapa.classList.add(
        'relative', 
        'cursor-pointer',
        'h-32',
        'lg:h-44',
        'rounded',
        'transition-transform',
        'duration-200',
        'transform-origin-center',
        'hover:scale-105',
        'overflow-hidden',
        'hover:border-4',
        'border-rose-500'
    );

    h2.classList.add(
        'absolute', 
        'inset-1/2', 
        '-translate-y-1/2', 
        '-translate-x-1/2', 
        'h-max',
        'w-60', 
        'text-center', 
        'text-3xl', 
        'dark:bg-black', 
        'bg-white', 
        'bg-opacity-40', 
        'dark:bg-opacity-40'
    );
    img.classList.add('h-full', 'w-full', 'object-cover');
    mapa.appendChild(h2);
    mapa.appendChild(img);
    contenedor.appendChild(mapa);
}

try {
    const datos = [];
    cargarMapas().then((data) => {
        data.data.forEach(map => {
            datos.push(map);
        });
        const mapas = datos.filter((obj, index, self) => 
            index === self.findIndex((o) => o.displayName === obj.displayName)
        );
        mapas.forEach((map) => {
            addImage(map.splash, map.displayName);
        });
    });
} catch (error) {
    console.error('Hubo un error con los mapas:', error);
};