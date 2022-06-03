import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

function cartReducer(state, action) {
    if (action.type === "ADD") {

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )
        const existingCartItem = state.items[existingCartItemIndex]

        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItem = {...action.item}
            updatedItems = state.items.concat(updatedItem)
        }

      
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}

export default function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    function addItemHandler(item) {
        dispatchCartAction({ type: "ADD", item: item })
    }

    function removeItemHandler(id) {
        dispatchCartAction({ type: "REMOVE", id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        deleteItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}