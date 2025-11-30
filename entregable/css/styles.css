const productos = [
    {
        id: 1,
        nombre: "Pastel de Chocolate Premium",
        descripcion: "Rico bizcocho de chocolate con relleno de trufa y cobertura de ganache",
        precio: 85.00,
        imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80"
    },
    {
        id: 2,
        nombre: "Pastel de Fresas Frescas",
        descripcion: "Delicado bizcocho con crema chantilly y fresas naturales",
        precio: 75.00,
        imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80"
    },
    {
        id: 3,
        nombre: "Red Velvet Clásico",
        descripcion: "Suave terciopelo rojo con frosting de queso crema",
        precio: 90.00,
        imagen: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80"
    },
    {
        id: 4,
        nombre: "Torta de Zanahoria",
        descripcion: "Húmeda torta de zanahoria con nueces y especias",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=80"
    },
    {
        id: 5,
        nombre: "Cheesecake de Arándanos",
        descripcion: "Cremoso cheesecake con coulis de arándanos",
        precio: 95.00,
        imagen: "https://images.unsplash.com/photo-1533134242995-96b4e0b9740b?w=500&q=80"
    },
    {
        id: 6,
        nombre: "Pastel de Vainilla Elegante",
        descripcion: "Clásico pastel de vainilla con buttercream suave",
        precio: 65.00,
        imagen: "https://images.unsplash.com/photo-1588195538326-c5b1e5b80d0b?w=500&q=80"
    }
];

let carrito = [];

function addToCart(event, id) {
    event.stopPropagation();
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    updateCartCount();
    showNotification(`${producto.nombre} agregado al carrito!`);
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = carrito.length;
}

function openCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    
    if (carrito.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666;">Tu carrito está vacío</p>';
    } else {
        cartItems.innerHTML = carrito.map((item, index) => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #eee;">
                <div>
                    <strong>${item.nombre}</strong><br>
                    <span style="color: #ff6b9d;">S/ ${item.precio.toFixed(2)}</span>
                </div>
                <button onclick="removeFromCart(${index})" style="background: #ff6b9d; color: white; border: none; padding: 0.5rem; border-radius: 5px; cursor: pointer;">
                    Eliminar
                </button>
            </div>
        `).join('');
    }
    
    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    document.getElementById('cartTotal').textContent = total.toFixed(2);
    
    modal.style.display = 'flex';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function removeFromCart(index) {
    carrito.splice(index, 1);
    updateCartCount();
    openCart();
}

function checkout() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    alert('¡Gracias por tu compra!\n\nSerás redirigido a la página de pago...');
    carrito = [];
    updateCartCount();
    closeCart();
}

function showProductDetails(id) {
    const producto = productos.find(p => p.id === id);
    alert(`${producto.nombre}\n\n${producto.descripcion}\n\nPrecio: S/ ${producto.precio.toFixed(2)}`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function scrollToProducts() {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        closeCart();
    }
}
