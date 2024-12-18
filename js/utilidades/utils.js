export const calcScreen = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth < 640) {
        return 'mobile';

    }  else if (screenWidth >= 640 && screenHeight < 640) {
        return 'mobilePortrait';

    }  else if (screenWidth <= 1080 && screenWidth >= 640 && screenHeight >= 640 && screenHeight > screenWidth) {
        return 'tablet';

    }  else if (screenWidth <= 1080 && screenWidth >= 640 && screenHeight >= 640 && screenHeight < screenWidth) {
        return 'tabletPortrait';

    }  else {
        return 'desktop';
    };
};

export const estilos = (pantalla, heroes, nombre, imgHeroe) => {
    nombre.forEach(n => {
        n.classList.add('text-4xl', 'mt-4');
    });
			
    heroes.forEach(h => {
        h.classList.remove('w-screen', 'w-[50vw]', 'w-[33.33vw]', 'w-[20vw]');

        if (pantalla ==='mobile') {
            h.classList.add('w-screen', 'snap-center', 'py-12');
            
        } else if (pantalla ==='mobilePortrait') {
            h.classList.add('w-[20vw]', 'snap-start');

        } else if (pantalla ==='tablet') {
            h.classList.add('w-[50vw]', 'snap-start', 'px-8', 'md:px-20', 'lg:px-28');
            
        } else if (pantalla ==='tabletPortrait') {
            h.classList.add('w-[33.33vw]', 'snap-start');
            
        } else if (pantalla ==='desktop') {
            h.classList.add('w-[25vw]', 'snap-start', 'xl:px-8', '2xl:px-2');
        };
    
        h.classList.add(
            'h-full',
            'flex',
            'flex-col',
            'items-center',
            'overflow-hidden',
        );
    });

    imgHeroe.forEach(img => {
        img.classList.remove('object-contain', 'w-96', 'h-auto', 'h-[15vh]');

        if (pantalla === 'mobilePortrait') {
            img.classList.add('h-[15vh]');

        } else {
            img.classList.add('h-auto'); 
        }

        img.classList.add('object-contain', 'w-full');
    });		
}; 