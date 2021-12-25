import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={ dialog.name } id={ dialog.id } />
  ));

  let messagesElements = props.state.messagesData.map((messages) => (
    <Message message={ messages.message } id={ messages.id } />
  ));

  let newMessgaeElement = React.createRef();

  let addMessage = () => {
    let text = newMessgaeElement.current.value;
    alert(text);
  };

  return (
    <div className={ styles.dialogs }>
      <div className={ styles['dialog-items'] }>{ dialogsElements }</div>
      <div className={ styles.messages }>{ messagesElements } <textarea ref={ newMessgaeElement }></textarea>
        <div>
          <button onClick={ addMessage }>Add Message</button>
        </div></div>
    </div >
  );
};

export default Dialogs;
