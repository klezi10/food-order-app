import { Fragment } from "react"
import ReactDOM from "react-dom"
import classes from "./Modal.module.css"


function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onDismiss} />
}

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
}

export default function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onDismiss={props.onDismiss} />,
                document.getElementById('overlay-root')
            )}
            {ReactDOM.createPortal(
                 <ModalOverlay>{props.children}</ModalOverlay>,
                 document.getElementById('overlay-root')
            )}
        </Fragment>
    )
}