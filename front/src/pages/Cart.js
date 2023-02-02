const CartChange = (productId) => {
    if (localStorage.getItem("cart") === null) {
        console.log('cart didnt exist');
        localStorage.setItem("cart", JSON.stringify([{ itemId: productId }]));
    } else {
        console.log('cart exists');
        const currentCart = JSON.parse(localStorage.getItem("cart"));
        if (currentCart.find(product => product.itemId === productId)) {
            console.log('remove one');
            const newCart = JSON.stringify(currentCart.filter(product => product.itemId != productId));
            localStorage.setItem("cart", newCart);
        } else {
            console.log('add one');
            const newCart = JSON.stringify([...currentCart, { itemId: productId }]);
            localStorage.setItem("cart", newCart);
        }
    }
}

const Cart=() => {
    return <div className="cart-page">
        <h1>Your Cart</h1>
        <button onClick={() => CartChange("testtesttest")}>test icule</button>
        <button onClick={() => CartChange("BOUAHAHAHA")}>test yahahahoayao</button>
    </div>
}

export { CartChange, Cart };