import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

export default function App() {
  const [modal, setModal] = useState(false)

  function handleCart(event) {
    event.preventDefault()
    setModal(true)
  }

  function handleDismiss() {
    setModal(false)
  }

  return (
    <CartProvider>
      {modal && <Cart onDismiss={handleDismiss} />}
      <Header onShowcart={handleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
