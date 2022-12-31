import styles from './block.module.css';

const Block = ({children}: any) => {
    return(
        <p className={styles.block}>
            {children}
        </p>
    )
}

export default Block;