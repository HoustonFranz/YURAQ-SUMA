/**
 * ============================================
 * YURAQ SUMA - FILTRANTES NATURALES
 * JavaScript Principal
 * ============================================
 * 
 * Tabla de Contenidos:
 * 1. Configuración y Variables Globales
 * 2. Navegación y Header
 * 3. Animaciones On Scroll
 * 4. Contador de Estadísticas
 * 5. Modal de Productos
 * 6. Formulario de Contacto
 * 7. Smooth Scroll
 * 8. Scroll to Top
 * 9. Utilidades
 * 10. Inicialización
 */

 'use strict';

 /* ============================================
    1. CONFIGURACIÓN Y VARIABLES GLOBALES
    ============================================ */
 
 const CONFIG = {
   animationDuration: 2000,
   scrollOffset: 80,
   counterSpeed: 1500,
   observerThreshold: 0.1
 };
 
 // Información detallada de productos para el modal
 const PRODUCTS_INFO = {
   cafe: {
     name: 'Flor de Café',
     botanical: 'Coffea arabica L.',
     icon: '☕',
     family: 'Rubiaceae',
     origin: 'Pangoa, Satipo (800-1800 msnm)',
     flowering: 'Agosto-septiembre (post-lluvias)',
     characteristics: 'Flores blancas, hermafroditas, efímeras (2-3 días)',
     aroma: 'Intenso, dulce, floral (similar a jazmín + miel)',
     flavor: 'Delicado, ligeramente dulce, sin amargor',
     color: 'Amarillo pálido transparente',
     compounds: 'Linalol, geraniol, 2-feniletanol (aromáticos)',
     benefits: ['Relajante natural', 'Digestivo', 'Antioxidante potente', 'Libre de cafeína'],
     safety: 'Completamente segura. Libre de cafeína y alcaloides tóxicos. Consumo tradicional en comunidades cafetaleras.',
     scientific: 'Ribeiro et al. (2021) documentan actividad antioxidante significativa'
   },
   cacao: {
     name: 'Flor de Cacao',
     botanical: 'Theobroma cacao L.',
     icon: '🍫',
     family: 'Malvaceae',
     origin: 'Satipo, Pangoa, Mazamari (300-800 msnm)',
     flowering: 'Caulifloria (flores emergen del tronco)',
     characteristics: 'Solo 1 de cada 500 flores se convierte en fruto',
     aroma: 'Dulce, delicado, notas lácteas y florales',
     flavor: 'Suave, reminiscencias de cacao sin amargor',
     color: 'Rosa pálido a ámbar',
     compounds: 'Flavonoides, polifenoles, antocianinas',
     benefits: ['Antioxidante natural', 'Mejora estado de ánimo', 'Teobromina residual mínima', 'Único en el mundo'],
     safety: 'Completamente segura. Consumo ancestral en comunidades amazónicas. Contenido de teobromina insignificante.',
     scientific: 'OMS (2020) reconoce componentes bioactivos del cacao'
   },
   anujo: {
     name: 'Flor de Hinojo',
     botanical: 'Justicia pectoralis Jacq.',
     icon: '🌿',
     family: 'Acanthaceae',
     origin: 'Pangoa (introducida y naturalizada)',
     flowering: 'Todo el año',
     characteristics: 'Planta ceremonial Asháninka conocida como Carpir o Té Criollo',
     aroma: 'Suave, herbal, ligeramente dulce',
     flavor: 'Equilibrado, sin amargor',
     color: 'Verde claro luminoso',
     compounds: 'Cumarina (en concentraciones seguras), umbeliferona',
     benefits: ['Relajante profundo', 'Ansiolítico natural', 'Expectorante', 'Uso ceremonial tradicional'],
     safety: 'Segura en dosis apropiadas (máx. 2-3 tazas/día). Contiene cumarina natural (similar a canela).',
     scientific: 'Zhang & Li (2019) documentan efecto calmante en modelos experimentales'
   },
   'hierba-luisa': {
     name: 'Hierba Luisa',
     botanical: 'Aloysia citrodora Palau',
     icon: '🍋',
     family: 'Verbenaceae',
     origin: 'Ampliamente cultivada en Selva Central',
     flowering: 'Excelente adaptación en clima cálido-húmedo',
     characteristics: 'Una de las infusiones más populares del Perú',
     aroma: 'Intenso cítrico (limón)',
     flavor: 'Refrescante, dulce natural',
     color: 'Amarillo verdoso brillante',
     compounds: 'Citral, limoneno (aceites esenciales)',
     benefits: ['Digestivo potente', 'Calmante', 'Antiespasmódico', 'Ansiolítico'],
     safety: 'Muy segura. Reconocida como GRAS (Generally Recognized As Safe) por FDA.',
     scientific: 'Flores & Gutiérrez (2022) - estudio clínico sobre efectos digestivos'
   },
   toronjil: {
     name: 'Toronjil',
     botanical: 'Melissa officinalis L.',
     icon: '🌱',
     family: 'Lamiaceae',
     origin: 'Mazamari (zonas altas)',
     flowering: 'Clima subtropical de Selva Central',
     characteristics: 'Uso milenario documentado',
     aroma: 'Cítrico fresco (limón suave)',
     flavor: 'Delicado, ligeramente dulce',
     color: 'Verde amarillento pálido',
     compounds: 'Ácido rosmarínico, citronelal, geraniol',
     benefits: ['Mejora calidad del sueño', 'Calmante efectivo', 'Digestivo', 'Neuroprotector'],
     safety: 'Muy segura. Aprobada por EMA (Agencia Europea de Medicamentos) para uso tradicional.',
     scientific: 'EMA (2020) reconoce uso tradicional'
   },
   naranjo: {
     name: 'Flor de Naranjo',
     botanical: 'Citrus aurantium L.',
     icon: '🌼',
     family: 'Rutaceae',
     origin: 'Mazamari, cítricos de Selva Central',
     flowering: 'Conocida como Azahar',
     characteristics: 'Uso tradicional global como agua de azahar',
     aroma: 'Dulce, intensamente floral',
     flavor: 'Delicado, notas cítricas suaves',
     color: 'Amarillo cristalino',
     compounds: 'Linalol, limoneno, nerolidol',
     benefits: ['Sedante natural', 'Inductor del sueño', 'Ansiolítico', 'Relajación profunda'],
     safety: 'Completamente segura. Sin contraindicaciones conocidas. Apto para consumo regular.',
     scientific: 'FAO (2021) documenta uso tradicional como relajante'
   }
 };
 
 /* ============================================
    2. NAVEGACIÓN Y HEADER
    ============================================ */
 
 /**
  * Clase para manejar la navegación y el header
  */
 class Navigation {
   constructor() {
     this.header = document.getElementById('header');
     this.navToggle = document.getElementById('nav-toggle');
     this.navMenu = document.getElementById('nav-menu');
     this.navLinks = document.querySelectorAll('.nav__link');
     
     this.init();
   }
 
   /**
    * Inicializa todos los event listeners de navegación
    */
   init() {
     this.setupScrollEffect();
     this.setupMobileMenu();
     this.setupNavLinks();
   }
 
   /**
    * Efecto de scroll en el header (cambia sombra al hacer scroll)
    */
   setupScrollEffect() {
     window.addEventListener('scroll', () => {
       if (window.scrollY > 50) {
         this.header.classList.add('scroll');
       } else {
         this.header.classList.remove('scroll');
       }
     });
   }
 
   /**
    * Configuración del menú móvil (hamburger menu)
    */
   setupMobileMenu() {
     if (!this.navToggle || !this.navMenu) return;
 
     this.navToggle.addEventListener('click', () => {
       this.toggleMenu();
     });
 
     // Cerrar menú al hacer clic fuera
     document.addEventListener('click', (e) => {
       if (!this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
         this.closeMenu();
       }
     });
   }
 
   /**
    * Toggle del menú móvil
    */
   toggleMenu() {
     this.navMenu.classList.toggle('active');
     
     // Animación del icono hamburguesa
     const icon = this.navToggle.querySelector('.nav__toggle-icon');
     icon.classList.toggle('active');
   }
 
   /**
    * Cierra el menú móvil
    */
   closeMenu() {
     this.navMenu.classList.remove('active');
     const icon = this.navToggle.querySelector('.nav__toggle-icon');
     icon.classList.remove('active');
   }
 
   /**
    * Configuración de los links de navegación
    */
   setupNavLinks() {
     this.navLinks.forEach(link => {
       link.addEventListener('click', (e) => {
         e.preventDefault();
         const targetId = link.getAttribute('href');
         const targetSection = document.querySelector(targetId);
         
         if (targetSection) {
           const offsetTop = targetSection.offsetTop - CONFIG.scrollOffset;
           
           window.scrollTo({
             top: offsetTop,
             behavior: 'smooth'
           });
 
           this.closeMenu();
           this.setActiveLink(link);
         }
       });
     });
 
     // Establecer link activo al hacer scroll
     window.addEventListener('scroll', () => {
       this.updateActiveLink();
     });
   }
 
   /**
    * Establece el link activo
    */
   setActiveLink(activeLink) {
     this.navLinks.forEach(link => link.classList.remove('active'));
     activeLink.classList.add('active');
   }
 
   /**
    * Actualiza el link activo basado en la posición del scroll
    */
   updateActiveLink() {
     const sections = document.querySelectorAll('.section, #hero');
     const scrollPos = window.scrollY + CONFIG.scrollOffset + 50;
 
     sections.forEach(section => {
       const top = section.offsetTop;
       const height = section.offsetHeight;
       const id = section.getAttribute('id');
       
       if (scrollPos >= top && scrollPos < top + height) {
         this.navLinks.forEach(link => {
           link.classList.remove('active');
           if (link.getAttribute('href') === `#${id}`) {
             link.classList.add('active');
           }
         });
       }
     });
   }
 }
 
 /* ============================================
    3. ANIMACIONES ON SCROLL
    ============================================ */
 
 /**
  * Clase para manejar animaciones al hacer scroll
  * Simula AOS (Animate On Scroll)
  */
 class ScrollAnimations {
   constructor() {
     this.elements = document.querySelectorAll('[data-aos]');
     this.init();
   }
 
   /**
    * Inicializa el observador de intersección
    */
   init() {
     if (!this.elements.length) return;
 
     const observerOptions = {
       threshold: CONFIG.observerThreshold,
       rootMargin: '0px 0px -100px 0px'
     };
 
     this.observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           this.animateElement(entry.target);
         }
       });
     }, observerOptions);
 
     this.elements.forEach(element => {
       this.observer.observe(element);
     });
   }
 
   /**
    * Anima un elemento cuando entra en viewport
    */
   animateElement(element) {
     const delay = element.getAttribute('data-aos-delay') || 0;
     
     setTimeout(() => {
       element.classList.add('aos-animate');
     }, delay);
   }
 }
 
 /* ============================================
    4. CONTADOR DE ESTADÍSTICAS
    ============================================ */
 
 /**
  * Clase para animar los contadores de estadísticas
  */
 class StatsCounter {
   constructor() {
     this.counters = document.querySelectorAll('.stat__number');
     this.animated = false;
     this.init();
   }
 
   /**
    * Inicializa el observador para los contadores
    */
   init() {
     if (!this.counters.length) return;
 
     const observerOptions = {
       threshold: 0.5
     };
 
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting && !this.animated) {
           this.animated = true;
           this.animateCounters();
         }
       });
     }, observerOptions);
 
     const statsSection = document.querySelector('.about__stats');
     if (statsSection) {
       observer.observe(statsSection);
     }
   }
 
   /**
    * Anima todos los contadores
    */
   animateCounters() {
     this.counters.forEach(counter => {
       this.animateCounter(counter);
     });
   }
 
   /**
    * Anima un contador individual
    */
   animateCounter(counter) {
     const target = parseInt(counter.getAttribute('data-target'));
     const duration = CONFIG.counterSpeed;
     const increment = target / (duration / 16); // 60 FPS
     let current = 0;
 
     const updateCounter = () => {
       current += increment;
       
       if (current < target) {
         counter.textContent = Math.floor(current).toLocaleString();
         requestAnimationFrame(updateCounter);
       } else {
         counter.textContent = target.toLocaleString();
       }
     };
 
     updateCounter();
   }
 }
 
 /* ============================================
    5. MODAL DE PRODUCTOS
    ============================================ */
 
 /**
  * Clase para manejar los modales de productos
  */
 class ProductModal {
   constructor() {
     this.modal = document.getElementById('product-modal');
     this.modalBody = document.getElementById('modal-body');
     this.modalClose = document.getElementById('modal-close');
     this.productButtons = document.querySelectorAll('.product__btn');
     
     this.init();
   }
 
   /**
    * Inicializa los event listeners del modal
    */
   init() {
     if (!this.modal) return;
 
     // Botones de productos
     this.productButtons.forEach(button => {
       button.addEventListener('click', () => {
         const productKey = button.getAttribute('data-product');
         this.openModal(productKey);
       });
     });
 
     // Botón de cerrar
     this.modalClose.addEventListener('click', () => {
       this.closeModal();
     });
 
     // Cerrar al hacer clic fuera del modal
     this.modal.addEventListener('click', (e) => {
       if (e.target === this.modal) {
         this.closeModal();
       }
     });
 
     // Cerrar con tecla ESC
     document.addEventListener('keydown', (e) => {
       if (e.key === 'Escape' && this.modal.classList.contains('active')) {
         this.closeModal();
       }
     });
   }
 
   /**
    * Abre el modal con información del producto
    */
   openModal(productKey) {
     const product = PRODUCTS_INFO[productKey];
     if (!product) return;
 
     this.modalBody.innerHTML = this.generateModalContent(product);
     this.modal.classList.add('active');
     document.body.style.overflow = 'hidden';
   }
 
   /**
    * Cierra el modal
    */
   closeModal() {
     this.modal.classList.remove('active');
     document.body.style.overflow = '';
   }
 
   /**
    * Genera el contenido HTML del modal
    */
   generateModalContent(product) {
     return `
       <div style="text-align: center; margin-bottom: 2rem;">
         <div style="font-size: 5rem; margin-bottom: 1rem;">${product.icon}</div>
         <h2 style="color: var(--primary-dark); margin-bottom: 0.5rem;">${product.name}</h2>
         <p style="font-style: italic; color: var(--gray-500); margin-bottom: 0;">
           ${product.botanical}
         </p>
         <p style="font-size: 0.875rem; color: var(--gray-500); margin-top: 0.25rem;">
           Familia: ${product.family}
         </p>
       </div>
 
       <div style="display: grid; gap: 1.5rem;">
         <div>
           <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 0.5rem;">
             📍 Origen
           </h3>
           <p style="color: var(--gray-600);">${product.origin}</p>
         </div>
 
         <div>
           <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 0.5rem;">
             🌸 Floración
           </h3>
           <p style="color: var(--gray-600);">${product.flowering}</p>
         </div>
 
         <div>
           <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 0.5rem;">
             ✨ Características
           </h3>
           <p style="color: var(--gray-600);">${product.characteristics}</p>
         </div>
 
         <div style="background-color: var(--gray-50); padding: 1.5rem; border-radius: 12px;">
           <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 1rem;">
             👃 Perfil Sensorial
           </h3>
           <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem;">
             <li style="color: var(--gray-700);">
               <strong>Aroma:</strong> ${product.aroma}
             </li>
             <li style="color: var(--gray-700);">
               <strong>Sabor:</strong> ${product.flavor}
             </li>
             <li style="color: var(--gray-700);">
               <strong>Color:</strong> ${product.color}
             </li>
           </ul>
         </div>
 
         <div>
           <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 0.5rem;">
             🧬 Compuestos Activos
           </h3>
           <p style="color: var(--gray-600);">${product.compounds}</p>
         </div>
 
         <div>
           <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 0.75rem;">
             💚 Beneficios
           </h3>
           <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
             ${product.benefits.map(benefit => `
               <span style="
                 display: inline-block;
                 padding: 0.5rem 1rem;
                 background-color: var(--accent-light);
                 color: var(--primary-dark);
                 border-radius: 50px;
                 font-size: 0.875rem;
                 font-weight: 600;
               ">${benefit}</span>
             `).join('')}
           </div>
         </div>
 
         <div style="background-color: rgba(16, 185, 129, 0.1); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--success);">
           <h3 style="color: var(--success); font-size: 1.25rem; margin-bottom: 0.5rem;">
             ✓ Seguridad de Consumo
           </h3>
           <p style="color: var(--gray-700); margin-bottom: 0;">${product.safety}</p>
         </div>
 
         <div style="background-color: var(--gray-50); padding: 1.5rem; border-radius: 12px;">
           <h3 style="color: var(--primary-color); font-size: 1.25rem; margin-bottom: 0.5rem;">
             🔬 Respaldo Científico
           </h3>
           <p style="color: var(--gray-600); margin-bottom: 0; font-size: 0.9375rem;">
             ${product.scientific}
           </p>
         </div>
       </div>
     `;
   }
 }
 
 /* ============================================
    6. FORMULARIO DE CONTACTO
    ============================================ */
 
 /**
  * Clase para manejar el formulario de contacto
  */
 class ContactForm {
   constructor() {
     this.form = document.getElementById('contact-form');
     this.init();
   }
 
   /**
    * Inicializa el formulario
    */
   init() {
     if (!this.form) return;
 
     this.form.addEventListener('submit', (e) => {
       e.preventDefault();
       this.handleSubmit();
     });
   }
 
   /**
    * Maneja el envío del formulario
    */
   handleSubmit() {
     const formData = new FormData(this.form);
     const data = Object.fromEntries(formData);
 
     // Validación básica
     if (!this.validateForm(data)) {
       this.showMessage('Por favor completa todos los campos correctamente', 'error');
       return;
     }
 
     // Simular envío (en producción, aquí iría la llamada AJAX)
     this.showMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
     this.form.reset();
   }
 
   /**
    * Valida los datos del formulario
    */
   validateForm(data) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     
     return data.name && 
            data.email && 
            emailRegex.test(data.email) && 
            data.subject && 
            data.message;
   }
 
   /**
    * Muestra un mensaje al usuario
    */
   showMessage(message, type) {
     const messageDiv = document.createElement('div');
     messageDiv.textContent = message;
     messageDiv.style.cssText = `
       position: fixed;
       top: ${CONFIG.scrollOffset + 20}px;
       right: 20px;
       padding: 1rem 1.5rem;
       background-color: ${type === 'success' ? 'var(--success)' : 'var(--error)'};
       color: white;
       border-radius: 8px;
       box-shadow: var(--shadow-lg);
       z-index: ${CONFIG.zModal + 10};
       animation: slideIn 0.3s ease-out;
     `;
 
     document.body.appendChild(messageDiv);
 
     setTimeout(() => {
       messageDiv.style.animation = 'slideOut 0.3s ease-out';
       setTimeout(() => messageDiv.remove(), 300);
     }, 3000);
   }
 }
 
 /* ============================================
    7. SMOOTH SCROLL
    ============================================ */
 
 /**
  * Configura el scroll suave para todos los enlaces internos
  */
 function setupSmoothScroll() {
   const scrollLinks = document.querySelectorAll('a[href^="#"]');
   
   scrollLinks.forEach(link => {
     if (link.classList.contains('nav__link')) return; // Ya manejado por Navigation class
     
     link.addEventListener('click', (e) => {
       e.preventDefault();
       const targetId = link.getAttribute('href');
       
       if (targetId === '#') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
         return;
       }
       
       const targetElement = document.querySelector(targetId);
       if (targetElement) {
         const offsetTop = targetElement.offsetTop - CONFIG.scrollOffset;
         window.scrollTo({
           top: offsetTop,
           behavior: 'smooth'
         });
       }
     });
   });
 }
 
 /* ============================================
    8. SCROLL TO TOP
    ============================================ */
 
 /**
  * Clase para manejar el botón de scroll to top
  */
 class ScrollToTop {
   constructor() {
     this.button = document.getElementById('scroll-top');
     this.init();
   }
 
   /**
    * Inicializa el botón
    */
   init() {
     if (!this.button) return;
 
     window.addEventListener('scroll', () => {
       this.toggleButton();
     });
 
     this.button.addEventListener('click', () => {
       window.scrollTo({
         top: 0,
         behavior: 'smooth'
       });
     });
   }
 
   /**
    * Muestra u oculta el botón basado en la posición del scroll
    */
   toggleButton() {
     if (window.scrollY > 300) {
       this.button.classList.add('active');
     } else {
       this.button.classList.remove('active');
     }
   }
 }
 
 /* ============================================
    9. UTILIDADES
    ============================================ */
 
 /**
  * Debounce function para optimizar eventos de scroll/resize
  */
 function debounce(func, wait) {
   let timeout;
   return function executedFunction(...args) {
     const later = () => {
       clearTimeout(timeout);
       func(...args);
     };
     clearTimeout(timeout);
     timeout = setTimeout(later, wait);
   };
 }
 
 /**
  * Throttle function para limitar ejecuciones
  */
 function throttle(func, limit) {
   let inThrottle;
   return function(...args) {
     if (!inThrottle) {
       func.apply(this, args);
       inThrottle = true;
       setTimeout(() => inThrottle = false, limit);
     }
   };
 }
 
 /**
  * Lazy loading de imágenes (si se agregan)
  */
 function setupLazyLoading() {
   const images = document.querySelectorAll('img[data-src]');
   
   const imageObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         const img = entry.target;
         img.src = img.getAttribute('data-src');
         img.removeAttribute('data-src');
         imageObserver.unobserve(img);
       }
     });
   });
 
   images.forEach(img => imageObserver.observe(img));
 }
 
 /* ============================================
    10. INICIALIZACIÓN
    ============================================ */
 
 /**
  * Inicializa todas las funcionalidades cuando el DOM está listo
  */
 function init() {
   console.log('🌸 Yuraq Suma - Inicializando aplicación...');
 
   try {
     // Inicializar navegación
     new Navigation();
     console.log('✓ Navegación inicializada');
 
     // Inicializar animaciones de scroll
     new ScrollAnimations();
     console.log('✓ Animaciones de scroll inicializadas');
 
     // Inicializar contador de estadísticas
     new StatsCounter();
     console.log('✓ Contadores de estadísticas inicializados');
 
     // Inicializar modal de productos
     new ProductModal();
     console.log('✓ Modal de productos inicializado');
 
     // Inicializar formulario de contacto
     new ContactForm();
     console.log('✓ Formulario de contacto inicializado');
 
     // Inicializar scroll suave
     setupSmoothScroll();
     console.log('✓ Smooth scroll inicializado');
 
     // Inicializar scroll to top
     new ScrollToTop();
     console.log('✓ Scroll to top inicializado');
 
     // Inicializar lazy loading
     setupLazyLoading();
     console.log('✓ Lazy loading inicializado');
 
     console.log('✅ Aplicación inicializada correctamente');
   } catch (error) {
     console.error('❌ Error al inicializar la aplicación:', error);
   }
 }
 
 // Ejecutar cuando el DOM esté listo
 if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', init);
 } else {
   init();
 }
 
 // Exportar para uso en módulos (opcional)
 if (typeof module !== 'undefined' && module.exports) {
   module.exports = {
     Navigation,
     ScrollAnimations,
     StatsCounter,
     ProductModal,
     ContactForm,
     ScrollToTop
   };
 }
 