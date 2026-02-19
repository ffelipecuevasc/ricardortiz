// === CONFIGURACIÓN DEL OBJETO tailwind ===
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Paleta base (index.html)
                "primary": "#e7c100",
                "background-dark": "#000000",
                "background-light": "#f8f8f5",
                // Colores específicos para uso puntual
                "surface-dark": "#111111",
                "gold-light": "#f2d06b",
                "gold-dark": "#a67c00",
                "text-main": "#FFFFFF",
                "text-secondary": "#d1d1d1",
                "border-color": "#1f1f1f",
                "text-muted": "#a1a1aa",
            },
            fontFamily: {
                // Asignamos Montserrat como principal (sans) y Cinzel Decorative como secundaria (serif)
                "display": ["Montserrat", "sans-serif"],
                "serif": ["'Cinzel Decorative'", "serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
}

// === LÓGICA DEL MENÚ MÓVIL ===
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (menuToggle && mobileMenu && menuIcon) {
        menuToggle.addEventListener('click', () => {
            // Alternar la clase 'hidden' para mostrar/ocultar el menú
            mobileMenu.classList.toggle('hidden');

            // Cambiar el icono de hamburguesa a una "X"
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.textContent = 'menu';
            } else {
                menuIcon.textContent = 'close';
            }
        });
    }
});