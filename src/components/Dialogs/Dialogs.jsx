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
  let dialogsData = [
    {
      id: 1,
      name: 'Oleg',
    },
    {
      id: 2,
      name: 'Alexander',
    },
    {
      id: 3,
      name: 'Sveta',
    },
    {
      id: 4,
      name: 'Dmitriy',
    },
    {
      id: 5,
      name: 'Dina',
    },
    {
      id: 6,
      name: 'Sandra',
    },
  ];

  let messagesData = [
    {
      id: 1,
      messages: 'Hi!',
    },
    {
      id: 2,
      messages: 'How are you?',
    },
    {
      id: 3,
      messages: 'Bitch!',
    },
    {
      id: 4,
      messages: 'Hello!',
    },
    {
      id: 5,
      messages: 'Yo!',
    },
    {
      id: 6,
      messages: 'I am robot',
    },
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles['dialog-items']}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Dmitriy" id="4" />
        <DialogItem name="Dina" id="5" />
        <DialogItem name="Sandra" id="6" />
      </div>
      <div className={styles.messages}>
        <Message message={messagesData[0].messages} id={messagesData[0].id} />
        <Message message={messagesData[1].messages} id={messagesData[1].id} />
        <Message message="" />
      </div>
    </div>
  );
};

export default Dialogs;
