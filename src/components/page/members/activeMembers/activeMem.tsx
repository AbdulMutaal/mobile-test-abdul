import styles from './activeMem.module.css';
import SearchTable from '../../../common/searchTable/searchTable';

const ActiveMembers = () => {
    return(
        <div className={styles.ActiveSection}>
            <SearchTable />
        </div>
    )
}

export default ActiveMembers;