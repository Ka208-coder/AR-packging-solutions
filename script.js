const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}










    // Cart array to hold items
    let cart = [];

    // Function to add item to cart
    function addToCart(item) {
        // Add the item to the cart array
        cart.push(item);

        // Update the shopping bag notification
        updateCartNotification();
    }

    // Function to update the cart notification
    function updateCartNotification() {
        const bagIcon = document.getElementById('lg-bag');
        let notification = bagIcon.querySelector('.notification');

        if (!notification) {
            // Create a new notification if it doesn't exist
            notification = document.createElement('span');
            notification.className = 'notification';
            bagIcon.appendChild(notification);
        }

        // Update the notification with the number of items in the cart
        notification.textContent = cart.length;
    }

    // Redirect to cart.php and pass cart items
    document.getElementById('lg-bag').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Store the cart data in localStorage (or sessionStorage)
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect to cart.php
        window.location.href = 'cart.php';
    });


