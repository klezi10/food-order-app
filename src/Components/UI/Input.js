import classes from "./Input.module.css"

export default function Input(props) {
    return (
        <div className={classes.input}>
            <label>Amount</label>
            <input type="number" />
        </div>
    )
}