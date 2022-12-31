import Avatar from '@mui/material/Avatar';

import styles from './card.module.css';
import Button from '../../../../common/button/button';

const Card = () => {
    return(
        <div className={styles.card}>
            <div>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> 
            </div>
            <div>
                <p className={styles.name}>Jessica Pierce</p>
            </div>
            <div>
                <p className={styles.email}>jessica.pierce@harvard.ac.uk</p>
            </div>
            <div>
                <Button type="cancel">Reject</Button>
                <Button>Accept</Button>
            </div>
        </div>
    )
}

export default Card;