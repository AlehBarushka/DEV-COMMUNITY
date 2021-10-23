import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

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
      message: 'Hi!',
    },
    {
      id: 2,
      message: 'How are you?',
    },
    {
      id: 3,
      message: 'Bitch!',
    },
    {
      id: 4,
      message: 'Hello!',
    },
    {
      id: 5,
      message: 'Yo!',
    },
    {
      id: 6,
      message: 'I am robot',
    },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={ dialog.name } id={ dialog.id } />
  ));

  let messagesElements = messagesData.map((messages) => (
    <Message message={ messages.message } id={ messages.id } />
  ));

  return (
    <div className={ styles.dialogs }>
      <div className={ styles['dialog-items'] }>{ dialogsElements }</div>
      <div className={ styles.messages }>{ messagesElements }</div>
    </div>
  );
};

export default Dialogs;
