async function cargarNav () {
    return await fetch('./nav.html').then((response) => response.text());
};

try {
    cargarNav().then((data) => {
        document.body.insertAdjacentHTML('afterbegin', data);

        const pagActual = window.location.pathname.split('/').pop();
        const linksMenu = document.querySelectorAll('.link-menu');
            
        linksMenu.forEach(link => {
            if (link.getAttribute('href') === `./${pagActual}`) {
                link.classList.add('active');
            }
        });

        const btnMenu = document.querySelector('#btnHamburguesa');
        const menu = document.querySelector('#menuHamburguesa');
        const btnModo = document.querySelector('#selectorTema');
        const htmlElement = document.documentElement;

        window.addEventListener('resize', () => {
            if (window.innerWidth > 640) {
                menu.classList.add('-translate-x-full');
                menu.classList.remove('translate-x-4');
                btnMenu.classList.remove('bg-slate-700');
            };
        });

        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('-translate-x-full');
            menu.classList.toggle('translate-x-4');
            
            if (btnMenu.classList.contains('bg-slate-700')) {
                btnMenu.classList.remove('bg-slate-700', 'dark:bg-gray-900');
                btnMenu.classList.add('bg-slate-900', 'dark:bg-black');
            } else {
                btnMenu.classList.remove('bg-slate-900', 'dark:bg-black');
                btnMenu.classList.add('bg-slate-700', 'dark:bg-gray-900');
            }
        });

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
          htmlElement.classList.add('dark');
        }

        btnModo.onclick = () => {
            htmlElement.classList.toggle('dark');
            localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
        }
    });

} catch (error) {
    console.error('Hubo un error:', error);
};

async function cargarFooter () {
    return await fetch('./footer.html').then((response) => response.text());
}

try {
    cargarFooter().then((data) => {
        document.body.insertAdjacentHTML('beforeend', data);
    });

} catch (error) {
    console.error('Hubo un error:', error);
};
