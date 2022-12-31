import styles from './button.module.css';

const Button = ({children, onclick, type}: any) => {
    return(
        <button className={`${type === "cancel" ? styles.CancelButtonStyle : styles.ButtonStyle}`} onClick={onclick}>{children}</button>
    )
}

export default Button;