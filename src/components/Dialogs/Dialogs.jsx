import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={ dialog.name } id={ dialog.id } />
  ));

  let messagesElements = props.state.messagesData.map((messages) => (
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
