import { Fragment } from "react"
import classes from "./Header.module.css"
import MealsImg from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"

export default function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Relishing Meals</h1>
                <HeaderCartButton onClick={props.onShowcart} />
            </header>
            <div className={classes['main-image']} >
                <img src={MealsImg} alt="A table with food" />
            </div>
        </Fragment>
    )
}