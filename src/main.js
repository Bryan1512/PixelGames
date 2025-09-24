// Función para cargar componentes dinámicamente
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Función para redirigir a WhatsApp
function redirectToWhatsApp(product) {
    const phoneNumber = '+525512345678'; // Reemplaza con el número real de WhatsApp
    const message = `Hola, estoy interesado en la suscripción de ${product}. ¿Puedes proporcionarme más detalles?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Agregar event listeners a los botones y cargar componentes
document.addEventListener('DOMContentLoaded', () => {
    // Cargar componentes
    loadComponent('navbar', 'src/components/navbar.html');
    loadComponent('header', 'src/components/header.html');
    loadComponent('benefits', 'src/components/benefits.html');
    loadComponent('products', 'src/components/products.html');
    loadComponent('faq', 'src/components/faq.html');
    loadComponent('contact', 'src/components/contact.html');
    loadComponent('footer', 'src/components/footer.html');
    loadComponent('whatsapp-float', 'src/components/whatsapp-float.html');

    // Agregar event listeners a los botones
    const buttons = document.querySelectorAll('button[data-product]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            redirectToWhatsApp(product);
        });
    });
});
