// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    const sunIcon = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
    const moonIcon = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;

    // Función para actualizar el ícono
    const updateIcon = () => {
        if (htmlElement.classList.contains('dark')) {
            themeIcon.innerHTML = sunIcon;
        } else {
            themeIcon.innerHTML = moonIcon;
        }
    };

    // Comprobar el tema guardado al cargar la página
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
    updateIcon();

    // Evento al hacer clic en el botón
    darkModeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        
        // Guardar la preferencia en localStorage
        if (htmlElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
        updateIcon();
    });
});