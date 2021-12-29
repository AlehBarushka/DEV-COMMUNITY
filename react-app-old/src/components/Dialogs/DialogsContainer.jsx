import React from 'react';
import { updateNewMessageActionCreator, sendMessageActionCreator, } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  const addMessageContainer = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const onMessageChangeContainer = (text) => {
    const action = updateNewMessageActionCreator(text);
    props.store.dispatch(action);
    console.log('state update');
  };

  return (
    <Dialogs
      addMessage={ addMessageContainer }
      onMessageChange={ onMessageChangeContainer }
      state={ state } />
  );
};

export default DialogsContainer;
