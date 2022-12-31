import styles from './button.module.css';

const Button = ({children, onclick}: any) => {
    return(
        <button className={styles.ButtonStyle} onClick={onclick}>{children}</button>
    )
}

export default Button;