import styles from './pendingM.module.css';
import Carousel from '../../../common/carousel/carousel';

const PendingMembers = () => {
    return(
        <div className={styles.PendingSection}>
            {/* <h2 className={styles.PendingHeading}>7 Pending Members</h2> */}
            <Carousel />
        </div>
    )
}

export default PendingMembers;