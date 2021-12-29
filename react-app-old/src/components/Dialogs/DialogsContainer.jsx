import React from 'react';
import {
  updateNewMessageActionCreator,
  sendMessageActionCreator,
} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      { (store) => {
        let state = store.getState().dialogsPage;

        const addMessageContainer = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const onMessageChangeContainer = (text) => {
          const action = updateNewMessageActionCreator(text);
          store.dispatch(action);
          console.log('state update');
        };
        return (
          <Dialogs
            addMessage={ addMessageContainer }
            onMessageChange={ onMessageChangeContainer }
            state={ state }
          />
        );
      }
      }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
