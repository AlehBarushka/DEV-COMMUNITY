import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={styles.dialog}>
      <NavLink to={path} activeClassName={styles.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles['dialog-items']}>
        <DialogItem name="Oleg" id="1" />
        <DialogItem name="Alexander" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Dmitriy" id="4" />
        <DialogItem name="Dina" id="5" />
        <DialogItem name="Sandra" id="6" />
      </div>
      <div className={styles.messages}>
        <Message message="Hi!" />
        <Message message="How are yoy?" />
        <Message message="Bitch!" />
      </div>
    </div>
  );
};

export default Dialogs;
