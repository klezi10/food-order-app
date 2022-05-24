import Modal from "../UI/Modal"
import classes from "./Cart.module.css"

export default function Cart(props) {
    const cartItems = <ul className={classes['cart-items']}>{[{
        id: '1', name: 'Sushi', amount: 2, price: '10.99'
    }].map(item => <li key={item.id}>{item.name}</li>)}</ul>

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>36.50</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}