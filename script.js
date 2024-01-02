let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = total.toFixed(2);
}
