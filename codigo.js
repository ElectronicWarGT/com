document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // Agregar escuchador de eventos a cada enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            
            // Remover clase active de todos los enlaces y agregar al actual
            menuLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // Obtener todas las páginas
            const pages = document.querySelectorAll('.page');
            
            // Remover clases de animación y ocultar todas las páginas
            pages.forEach(page => {
                page.classList.remove('fade-in');
                if (page.classList.contains('active')) {
                    page.classList.add('fade-out');
                    
                    // Después de la animación, ocultar la página
                    setTimeout(() => {
                        page.classList.remove('active', 'fade-out');
                    }, 500);
                }
            });
            
            // Mostrar la página seleccionada con animación
            setTimeout(() => {
                const activePage = document.getElementById(pageId);
                activePage.classList.add('active', 'fade-in');
            }, 500);
        });
    });
});