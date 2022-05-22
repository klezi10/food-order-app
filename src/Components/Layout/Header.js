import { Fragment } from "react"
import classes from "./Header.module.css"
import MealsImg from "../../assets/meals.jpg"

export default function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Relishing Meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']} >
                <img src={MealsImg} alt="A table with food" />
            </div>
        </Fragment>
    )
}