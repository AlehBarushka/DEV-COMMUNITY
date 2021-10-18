import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles['dialogs-items']}>
        <div className={styles.dialog}>
          <NavLink to="/dialog1" activeClassName={styles.active}>
            Dialog1
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialog2" activeClassName={styles.active}>
            Dialog2
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialog3" activeClassName={styles.active}>
            Dialog3
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialog4" activeClassName={styles.active}>
            Dialog4
          </NavLink>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hi!</div>
        <div className={styles.message}>How are you?</div>
        <div className={styles.message}>Yo)))</div>
      </div>
    </div>
  );
};

export default Dialogs;
