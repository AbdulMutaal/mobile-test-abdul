import style from './members.module.css';
import LeftIcon from '../../../assets/leftIcon.svg';

import Invite from './invite/invite';
import PendingMembers from './pendingMembers/pendingM';
import ActiveMembers from './activeMembers/activeMem';

const Members = () => {
    return(
        <div className={style.pageMember}>
            <div className={style.Header}>
                <img src={LeftIcon} alt="leftIcon" />
                <h2 className={style.GroupMText}>Group Members</h2>
            </div>

            <Invite />
            <PendingMembers />
            <ActiveMembers />
        </div>
        
    )
}

export default Members;