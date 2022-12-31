import Avatar from '@mui/material/Avatar';

import styles from './card.module.css';
import Button from '../../../../common/button/button';
import GirlAvatar from '../../../../../assets/girlAvatar.svg'

const Card = () => {
    return(
        <div className={styles.card}>
            <div>
                <Avatar alt="Remy Sharp" src={GirlAvatar} /> 
            </div>
            <div>
                <p className={styles.name}>Jessica Pierce</p>
            </div>
            <div>
                <p className={styles.email}>jessica.pierce@harvard.ac.uk</p>
            </div>
            <div>
                <Button onclick={() => window.open("https://google.com",'_blank')} type="cancel">Reject</Button>
                <Button onclick={() => window.open("https://google.com",'_blank')} >Accept</Button>
            </div>
        </div>
    )
}

export default Card;