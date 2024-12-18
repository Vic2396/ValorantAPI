tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                valorant: ['Rajdhani', 'sans-serif'],
            },
            backgroundImage: {
                'fondoClear': "url('./media/fondoClear.webp')",
                'fondoDark': "url('./media/fondoDark.webp')",
                'cartelClaro': "url('./media/cartelClaro.jpg')",
                'cartelDark': "url('./media/cartelDark.png')",
                'logoLargo': "url('./media/logoLargo.png')",
            },
            boxShadow: {
                'custom-rose-b': '0px 5px 5px 0px rgba(244, 63, 94, 0.5)',
                'custom-rose-t': '0px -5px 5px 0px rgba(244, 63, 94, 0.5)',
                'custom-slate-b': '0px 5px 5px 0px rgba(15, 23, 42, 0.5)',
                'custom-slate-t': '0px -5px 5px 0px rgba(15, 23, 42, 0.5)',
            },
        },
    },
};