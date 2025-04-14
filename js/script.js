// Inicializar AOS (Animate On Scroll)
AOS.init({
  once: true,        // Las animaciones ocurren solo una vez
  offset: 100,       // Offset desde el punto de activación
  duration: 1000,    // Duración de las animaciones
  easing: 'ease-in-out' // Función de temporización
});

// Funcionalidad del menú
document.addEventListener('DOMContentLoaded', function () {
  // Menú de productos
  const productosButton = document.getElementById('productos-button');
  const productosMenu = document.getElementById('productos-menu');
  let isMenuOpen = false;

  productosButton.addEventListener('click', function () {
    isMenuOpen = !isMenuOpen;
    productosMenu.classList.toggle('hidden');
    productosButton.setAttribute('aria-expanded', isMenuOpen);
  });

  document.addEventListener('click', function (event) {
    if (!productosButton.contains(event.target) && !productosMenu.contains(event.target)) {
      productosMenu.classList.add('hidden');
      productosButton.setAttribute('aria-expanded', 'false');
      isMenuOpen = false;
    }
  });

  // Menú móvil
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  let isMobileMenuOpen = false;

  mobileMenuButton.addEventListener('click', function() {
    isMobileMenuOpen = true;
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Previene el scroll del body
  });

  closeMenuButton.addEventListener('click', function() {
    isMobileMenuOpen = false;
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = ''; // Restaura el scroll del body
  });

  // Cerrar el menú al hacer clic fuera
  document.addEventListener('click', function(event) {
    if (isMobileMenuOpen && !mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
      isMobileMenuOpen = false;
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });

  // Botón para subir a la parte superior
  const scrollToTopButton = document.getElementById('scroll-to-top');
  
  // Mostrar/ocultar el botón según la posición del scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.remove('opacity-0');
      scrollToTopButton.classList.add('opacity-100');
    } else {
      scrollToTopButton.classList.remove('opacity-100');
      scrollToTopButton.classList.add('opacity-0');
    }
  });
  
  // Función para subir a la parte superior
  scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});