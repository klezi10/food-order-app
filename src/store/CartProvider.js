import CartContext from "./cart-context";

export default function CartProvider(props) {
    function addItemHandler(item) { }

    function removeItemHandler(id) { }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        deleteItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}