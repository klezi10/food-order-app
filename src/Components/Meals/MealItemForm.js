import classes from "./MealItemForm.module.css"
import Input from "../UI/Input"

export default function MealItemForm() {
    return (
        <form className={classes.form}>
            <Input />
            <button>+ Add</button>
        </form>
    )
}