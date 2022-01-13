// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { updateNewMessageAC, sendMessageAC } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
	return {
		state: state.dialogsPage,
	};
};

const DialogsContainer = connect(mapStateToProps, {
	addMessage: sendMessageAC,
	onMessageChange: updateNewMessageAC,
})(Dialogs);

export default DialogsContainer;
