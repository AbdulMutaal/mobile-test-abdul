import styles from './invite.module.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from '../../../common/button/button';
import Toaster from '../../../common/toaster/toaster';

const Invite = () => {
    const value = "test.so/group/code=25T47";

    return(
        <div className={styles.InviteSection}>
            <div className={styles.InviteTextDiv}>
               <p className={styles.InviteMailIcon}>💌</p>
               <div style={{marginRight: '-5px'}}>
                    <p className={styles.InviteMMHeading}>Invite More Member</p>
                    <p className={styles.InviteMMText}>Invite your friends to the organization!</p>
                </div> 
            </div>

            <div className={styles.CopySection}>
                <p className={styles.CopyHeading}>Copy and Share Group Link with code</p>
                <div className={styles.CopyTextDiv}>
                    <p className={styles.CopyText}>{value}</p>
                    
                    <CopyToClipboard text={value} onCopy={() => Toaster({type: "success", message: "copied"})}>
                        <ContentCopyIcon className={styles.CopyIcon} />
                    </CopyToClipboard>
                </div>
            </div> 
            
            <div className={styles.OrDiv}>
                <p className={styles.OrText}>or</p>
            </div>  

            <div className={styles.EmailDiv}>
                <p className={styles.EmailHeaing}>Send Invite by Email</p>
                <div className={styles.EmailInputDiv}>
                    <div style={{width: '100%'}}>
                        <p className={styles.EmailInputText}>Member Email</p>
                        
                        <input 
                            type="email" 
                            placeholder="Enter your friend email here..."
                            className={styles.EmailInput}
                        />
                    </div>
                    
                    <Button onclick={() => window.open("https://google.com",'_blank')}>Send</Button>
                    
                </div>
            </div>    
        </div>
    )
}

export default Invite;